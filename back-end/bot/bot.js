const TelegramBot = require("node-telegram-bot-api");
const db = require("../db/db");
const bcrypt = require("bcryptjs");

const token = "8237784167:AAHmc8slaZ57W5nUCO3XYiGHrApIC0GDtH0";

// Настройки бота с обработкой ошибок
const bot = new TelegramBot(token, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10,
    },
  },
});

// Обработчики ошибок
bot.on("error", (error) => {
  console.error("❌ Telegram Bot Error:", error);
});

bot.on("polling_error", (error) => {
  console.error("❌ Polling Error:", error);
});

bot.on("webhook_error", (error) => {
  console.error("❌ Webhook Error:", error);
});

// Проверяем соединение
bot
  .getMe()
  .then((me) => {
    console.log("✅ Бот успешно подключен:", me.username);
  })
  .catch((error) => {
    console.error("❌ Ошибка подключения бота:", error);
    process.exit(1);
  });

// Состояния пользователей для авторизации
const userStates = new Map();

// Функция для получения UTM статистики
function getUTMStats() {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT target, count, updated_at FROM utm_stats ORDER BY count DESC`,
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });
}

function updateUTMStats(target) {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT count FROM utm_stats WHERE target = ?`,
      [target],
      (err, row) => {
        if (err) {
          reject(err);
          return;
        }

        if (row) {
          // Обновляем существующую запись
          db.run(
            `UPDATE utm_stats SET count = count + 1, updated_at = CURRENT_TIMESTAMP WHERE target = ?`,
            [target],
            function (err) {
              if (err) reject(err);
              else resolve(this.changes);
            }
          );
        } else {
          // Создаем новую запись
          db.run(
            `INSERT INTO utm_stats (target, count) VALUES (?, 1)`,
            [target],
            function (err) {
              if (err) reject(err);
              else resolve(this.changes);
            }
          );
        }
      }
    );
  });
}
// Команда старт
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const welcomeMessage = `
🤖 Добро пожаловать в кооперативный бот!

Для доступа к функциям бота необходимо авторизоваться.

Команды:
/login - Авторизация в системе
    `;

  bot.sendMessage(chatId, welcomeMessage).catch((error) => {
    console.error("Error sending message:", error);
  });
});

// Команда логина
bot.onText(/\/login/, (msg) => {
  const chatId = msg.chat.id;

  // Проверяем, не авторизован ли уже пользователь
  db.get(
    `SELECT * FROM bot_users WHERE telegram_id = ? AND is_active = 1`,
    [chatId],
    (err, user) => {
      if (err) {
        console.error("Database error:", err);
        return bot
          .sendMessage(chatId, "❌ Ошибка базы данных")
          .catch(console.error);
      }

      if (user) {
        return bot
          .sendMessage(
            chatId,
            `✅ Вы уже авторизованы!\n\n` +
              `Используйте /profile для просмотра профиля`
          )
          .catch(console.error);
      }

      // Начинаем процесс авторизации
      userStates.set(chatId, { state: "awaiting_login" });
      bot.sendMessage(chatId, "Введите ваш логин:").catch(console.error);
    }
  );
});

// Команда профиля
bot.onText(/\/profile/, (msg) => {
  const chatId = msg.chat.id;

  // Получаем данные пользователя
  db.get(
    `SELECT * FROM bot_users WHERE telegram_id = ? AND is_active = 1`,
    [chatId],
    (err, user) => {
      if (err) {
        console.error("Database error:", err);
        return bot
          .sendMessage(chatId, "❌ Ошибка базы данных")
          .catch(console.error);
      }

      if (!user) {
        return bot
          .sendMessage(
            chatId,
            "❌ Вы не авторизованы!\n" + "Используйте /login для авторизации"
          )
          .catch(console.error);
      }

      const profileMessage = `
👑 Ваш профиль (Администратор)

📝 ФИО: ${user.full_name}
💼 Должность: ${user.position}
📅 Дата регистрации: ${new Date(user.created_at).toLocaleDateString()}
📱 Telegram: @${user.username || "не указан"}
            `;

      bot.sendMessage(chatId, profileMessage).catch(console.error);
    }
  );
});

// Обработка текстовых сообщений (для авторизации)
bot.on("message", (msg) => {
  // Игнорируем команды
  if (msg.text.startsWith("/")) return;

  const chatId = msg.chat.id;
  const text = msg.text;
  const userState = userStates.get(chatId);

  if (!userState) return;

  switch (userState.state) {
    case "awaiting_login":
      userState.login = text;
      userState.state = "awaiting_password";
      bot.sendMessage(chatId, "Введите ваш пароль:").catch(console.error);
      break;

    case "awaiting_password":
      const login = userState.login;
      const password = text;

      // Проверяем логин и пароль в таблице auth_credentials
      db.get(
        `SELECT * FROM auth_credentials WHERE login = ? AND is_active = 1`,
        [login],
        (err, credential) => {
          if (err) {
            console.error("Database error:", err);
            userStates.delete(chatId);
            return bot
              .sendMessage(chatId, "❌ Ошибка базы данных")
              .catch(console.error);
          }

          if (!credential) {
            userStates.delete(chatId);
            return bot
              .sendMessage(chatId, "❌ Логин не найден")
              .catch(console.error);
          }

          // Проверяем пароль
          if (bcrypt.compareSync(password, credential.password_hash)) {
            // Сохраняем пользователя в bot_users (все админы)
            db.run(
              `INSERT INTO bot_users 
                                (telegram_id, username, first_name, full_name, position, is_admin) 
                                VALUES (?, ?, ?, ?, ?, ?)`,
              [
                chatId,
                msg.chat.username,
                msg.chat.first_name,
                credential.full_name,
                credential.position,
                1,
              ],
              function (err) {
                userStates.delete(chatId);

                if (err) {
                  console.error("Error saving user:", err);
                  return bot
                    .sendMessage(chatId, "❌ Ошибка при авторизации")
                    .catch(console.error);
                }

                const successMessage =
                  `👑 Авторизация успешна!\n\n` +
                  `Добро пожаловать, ${credential.full_name}!\n\n` +
                  `📋 Доступные команды:\n` +
                  `/profile - Ваш профиль\n` +
                  `/help - Помощь\n` +
                  `/users - Список пользователей\n` +
                  `/stats - Статистика`;

                bot.sendMessage(chatId, successMessage).catch(console.error);
              }
            );
          } else {
            userStates.delete(chatId);
            bot.sendMessage(chatId, "❌ Неверный пароль").catch(console.error);
          }
        }
      );
      break;
  }
});

// Команда помощи
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;

  // Проверяем, авторизован ли пользователь
  db.get(
    `SELECT * FROM bot_users WHERE telegram_id = ? AND is_active = 1`,
    [chatId],
    (err, user) => {
      if (err) {
        console.error("Database error:", err);
        return bot
          .sendMessage(chatId, "❌ Ошибка базы данных")
          .catch(console.error);
      }

      if (!user) {
        return bot
          .sendMessage(
            chatId,
            "❌ Доступ запрещен!\n" +
              "Для доступа к помощи необходимо авторизоваться.\n" +
              "Используйте /login"
          )
          .catch(console.error);
      }

      const helpMessage = `
👑 Команды администратора:

/profile - Ваш профиль
/users - Список пользователей
/stats - Статистика системы
/help - Помощь

📊 Все пользователи имеют права администратора.
            `;

      bot.sendMessage(chatId, helpMessage).catch(console.error);
    }
  );
});

// Команда для списка пользователей
bot.onText(/\/users/, (msg) => {
  const chatId = msg.chat.id;

  // Проверяем, авторизован ли пользователь
  db.get(
    `SELECT * FROM bot_users WHERE telegram_id = ? AND is_active = 1`,
    [chatId],
    (err, user) => {
      if (err || !user) {
        return bot
          .sendMessage(chatId, "❌ Сначала авторизуйтесь через /login")
          .catch(console.error);
      }

      // Получаем всех пользователей
      db.all(
        `SELECT username, first_name, full_name, position, created_at 
                    FROM bot_users WHERE is_active = 1 ORDER BY created_at DESC`,
        (err, rows) => {
          if (err) {
            console.error("Database error:", err);
            return bot
              .sendMessage(chatId, "❌ Ошибка базы данных")
              .catch(console.error);
          }

          if (rows.length === 0) {
            return bot
              .sendMessage(chatId, "📭 Пользователей не найдено")
              .catch(console.error);
          }

          let usersList = "👥 Список администраторов:\n\n";

          rows.forEach((user, index) => {
            usersList += `${index + 1}. ${user.full_name}\n`;
            usersList += `   💼 ${user.position}\n`;
            usersList += `   📱 @${user.username || "не указан"}\n`;
            usersList += `   📅 ${new Date(
              user.created_at
            ).toLocaleDateString()}\n\n`;
          });

          usersList += `Всего: ${rows.length} администраторов`;

          bot.sendMessage(chatId, usersList).catch(console.error);
        }
      );
    }
  );
});

// Команда статистики с UTM
// Команда статистики с UTM
bot.onText(/\/stats/, (msg) => {
  const chatId = msg.chat.id;

  // Проверяем, авторизован ли пользователь
  db.get(
    `SELECT * FROM bot_users WHERE telegram_id = ? AND is_active = 1`,
    [chatId],
    (err, user) => {
      if (err || !user) {
        return bot
          .sendMessage(chatId, "❌ Сначала авторизуйтесь через /login")
          .catch(console.error);
      }

      // Получаем UTM статистику
      getUTMStats()
        .then((utmStats) => {
          let regularMessage = "";
          let qrMessage = "";
          let totalRegular = 0;
          let totalQR = 0;

          // Разделяем статистику на обычные и QR переходы
          const regularStats = [];
          const qrStats = [];

          utmStats.forEach((item) => {
            if (item.target.endsWith("_qr")) {
              const cleanTarget = item.target.replace("_qr", "");
              qrStats.push({ target: cleanTarget, count: item.count });
              totalQR += item.count;
            } else {
              regularStats.push(item);
              totalRegular += item.count;
            }
          });

          // Формируем сообщение для обычных переходов
          if (regularStats.length > 0) {
            regularMessage = "📊 Обычные переходы:\n";
            regularStats.forEach((item) => {
              regularMessage += `🎯 ${item.target}: ${item.count} переходов\n`;
            });
            regularMessage += `📈 Всего: ${totalRegular}\n\n`;
          } else {
            regularMessage = "📊 Обычные переходы: нет данных\n\n";
          }

          // Формируем сообщение для QR переходов
          if (qrStats.length > 0) {
            qrMessage = "📱 QR-переходы:\n";
            qrStats.forEach((item) => {
              qrMessage += `🔲 ${item.target}: ${item.count} переходов\n`;
            });
            qrMessage += `📈 Всего QR: ${totalQR}\n\n`;
          } else {
            qrMessage = "📱 QR-переходы: нет данных\n\n";
          }

          const statsMessage = `
${regularMessage}

📊 Общая статистика:
👥 Всего переходов: ${totalRegular + totalQR}
📱 Обычные переходы: ${totalRegular}
🔲 QR-переходы: ${totalQR}
🎯 Уникальных источников: ${targets.length}
          `;

          bot.sendMessage(chatId, statsMessage).catch(console.error);
        })
        .catch((err) => {
          console.error("Error getting UTM stats:", err);
          bot
            .sendMessage(chatId, "❌ Ошибка при получении UTM статистики")
            .catch(console.error);
        });
    }
  );
});

console.log("✅ Бот запущен успешно!");
console.log("👑 Режим: Все пользователи - администраторы");
console.log("🔑 Токен установлен напрямую");

// Экспортируем функцию для обновления UTM статистики
module.exports = { bot, updateUTMStats };
