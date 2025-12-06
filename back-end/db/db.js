const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const bcrypt = require("bcryptjs");

const dbPath = path.join(__dirname, "../db/db.sqlite");
const db = new sqlite3.Database(dbPath);

// Функция для генерации случайного логина
function generateRandomLogin() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Функция для генерации случайного пароля
function generateRandomPassword() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let result = "";
  for (let i = 0; i < 12; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Инициализация базы данных
db.serialize(() => {
  // Таблица пользователей бота
  db.run(`CREATE TABLE IF NOT EXISTS bot_users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        telegram_id INTEGER UNIQUE,
        username TEXT,
        first_name TEXT,
        last_name TEXT,
        full_name TEXT,
        position TEXT,
        is_admin BOOLEAN DEFAULT 1,
        is_active BOOLEAN DEFAULT 1,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

  // Таблица с предустановленными логинами
  db.run(`CREATE TABLE IF NOT EXISTS auth_credentials (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        login TEXT UNIQUE,
        password_hash TEXT,
        full_name TEXT,
        position TEXT,
        is_admin BOOLEAN DEFAULT 1,
        is_active BOOLEAN DEFAULT 1
    )`);

  // Таблица для UTM статистики - ИСПРАВЛЕННАЯ
  db.run(`CREATE TABLE IF NOT EXISTS utm_stats (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        target TEXT UNIQUE, -- Добавляем UNIQUE constraint
        count INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

  // Создаем тестовые учетные данные
  const login1 = "FDsbm23vsdg";
  const password1 = "342fcdsvmk!mcsdf!";
  const passwordHash1 = bcrypt.hashSync(password1, 12);

  db.run(
    `INSERT OR IGNORE INTO auth_credentials 
            (login, password_hash, full_name, position, is_admin) 
            VALUES (?, ?, ?, ?, ?)`,
    [login1, passwordHash1, "Иван Иванов", "Менеджер", 1]
  );

  // Создаем аккаунты для команды с рандомными логинами/паролями
  const teamMembers = [
    { full_name: "Николаев Андрей", position: "Генеральный директор" },
    { full_name: "Ханухов Алэн", position: "Операционный директор" },
    { full_name: "Ханухов Кристиан", position: "Арт-директор" },
    { full_name: "Михаил Филиппов", position: "Маркетинговый Директор" },
    { full_name: "Николаев Никита", position: "Менеджер по траффику" },
  ];

  teamMembers.forEach((member) => {
    const login = generateRandomLogin();
    const password = generateRandomPassword();
    const passwordHash = bcrypt.hashSync(password, 12);

    db.run(
      `INSERT OR IGNORE INTO auth_credentials 
                (login, password_hash, full_name, position, is_admin) 
                VALUES (?, ?, ?, ?, ?)`,
      [login, passwordHash, member.full_name, member.position, 1]
    );

    console.log(`👤 ${member.full_name}`);
    console.log(`   Логин: ${login}`);
    console.log(`   Пароль: ${password}`);
    console.log(`   Должность: ${member.position}`);
    console.log("---");
  });

  console.log("✅ База данных инициализирована");
  console.log("🔑 Все логины и пароли сгенерированы выше");
});

console.log("📊 База данных готова");

module.exports = db;
