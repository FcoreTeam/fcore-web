const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();

// Создаем папку для загрузок если её нет
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Настройка multer для загрузки файлов
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
  fileFilter: function (req, file, cb) {
    const allowedTypes = [".pdf", ".doc", ".docx", ".txt"];
    const fileExtension = path.extname(file.originalname).toLowerCase();

    if (allowedTypes.includes(fileExtension)) {
      cb(null, true);
    } else {
      cb(
        new Error("Недопустимый формат файла. Разрешены: PDF, DOC, DOCX, TXT"),
        false
      );
    }
  },
});

// CORS middleware
app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "https://fcore.tech",
    "https://fcore.tech/api",
  ];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Для FormData НЕ используем express.json() - это только для JSON
app.use(express.urlencoded({ extended: true }));

// Статика для загруженных файлов
app.use("/uploads", express.static("uploads"));

// Запускаем бота и получаем функцию updateUTMStats и bot
const { updateUTMStats, bot } = require("./bot/bot");

// Хранилище для счетчика (временное)
let utmStats = {};

// UTM endpoint
app.get("/api/utm", async (req, res) => {
  const { target, qr } = req.query;

  if (!target) {
    return res.status(400).json({ error: "Target parameter is required" });
  }

  try {
    // Если есть параметр qr, добавляем суффикс
    const finalTarget = qr === "true" ? `${target}_qr` : target;

    await updateUTMStats(finalTarget);
    utmStats[finalTarget] = (utmStats[finalTarget] || 0) + 1;

    console.log(
      `UTM click for target: ${finalTarget}, total: ${utmStats[finalTarget]}`
    );

    const baseUrl = "https://fcore.tech";

    res.json({
      success: true,
      redirectUrl: `${baseUrl}?utm_source=${finalTarget}`,
      target: finalTarget,
      count: utmStats[finalTarget],
      isQR: qr === "true",
    });
  } catch (error) {
    console.error("Error updating UTM stats:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/utm/stats", (req, res) => {
  const regularStats = {};
  const qrStats = {};

  Object.entries(utmStats).forEach(([target, count]) => {
    if (target.endsWith("_qr")) {
      const cleanTarget = target.replace("_qr", "");
      qrStats[cleanTarget] = count;
    } else {
      regularStats[target] = count;
    }
  });

  const totalRegular = Object.values(regularStats).reduce(
    (sum, count) => sum + count,
    0
  );
  const totalQR = Object.values(qrStats).reduce((sum, count) => sum + count, 0);

  res.json({
    success: true,
    data: {
      regular: regularStats,
      qr: qrStats,
      all: utmStats,
    },
    totals: {
      regular: totalRegular,
      qr: totalQR,
      all: totalRegular + totalQR,
    },
    summary: {
      regularTargets: Object.keys(regularStats).length,
      qrTargets: Object.keys(qrStats).length,
      totalTargets: Object.keys(utmStats).length,
    },
  });
});

// Form endpoint - СТАРАЯ ВЕРСИЯ
app.post("/api/form", (req, res) => {
  const { name, email, message, utm_source } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "All fields are required",
    });
  }

  console.log("Form submission:", {
    name,
    email,
    message,
    utm_source,
    timestamp: new Date().toISOString(),
  });

  res.json({
    success: true,
    message: "Form submitted successfully",
    data: {
      name,
      email,
      utm_source,
    },
  });
});

// НОВЫЙ endpoint для brief формы с FormData
app.post("/api/postForm", upload.single("file"), async (req, res) => {
  let filePath = null;

  try {
    console.log("📨 Received FormData, body:", req.body);
    console.log("📎 File:", req.file);

    const {
      name,
      phone,
      email,
      orderType,
      orderPrice,
      orderDeadline,
      description,
    } = req.body;

    // Валидация обязательных полей
    if (
      !name ||
      !email ||
      !orderType ||
      !orderPrice ||
      !orderDeadline ||
      !description
    ) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(400).json({
        success: false,
        error: "Все обязательные поля должны быть заполнены",
      });
    }

    // Получаем реальный IP
    const realIp =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.ip ||
      "Неизвестен";

    const formData = {
      name,
      phone: phone || "Не указан",
      email,
      orderType,
      orderPrice,
      orderDeadline,
      description,
      file: req.file ? req.file.filename : "Файл не прикреплен",
      fileOriginalName: req.file ? req.file.originalname : "",
      fileSize: req.file
        ? (req.file.size / 1024 / 1024).toFixed(2) + " MB"
        : "",
      timestamp: new Date().toISOString(),
      ip: realIp,
    };

    console.log("📝 New brief form submission:", formData);

    // Сохраняем путь к файлу для отправки в Telegram
    if (req.file) {
      filePath = req.file.path;
    }

    // Отправляем уведомление в Telegram с файлом
    await sendTelegramNotification(formData, filePath);

    res.json({
      success: true,
      message: "Бриф успешно отправлен!",
      data: {
        name,
        email,
        orderType,
        hasFile: !!req.file,
        timestamp: formData.timestamp,
      },
    });
  } catch (error) {
    // Удаляем файл при ошибке
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    console.error("❌ Error processing form:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Внутренняя ошибка сервера",
    });
  }
});

async function sendTelegramNotification(formData, filePath) {
  try {
    const message = `
🚀 НОВАЯ ЗАЯВКА НА БРИФ!

👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
📧 Контакт: ${formData.email}
📋 Тип заказа: ${formData.orderType}
💰 Бюджет: ${formData.orderPrice}
⏰ Срок: ${formData.orderDeadline}
📝 Описание: ${formData.description}
📎 Файл: ${formData.fileOriginalName || formData.file}
📏 Размер файла: ${formData.fileSize}
🕐 Время: ${new Date(formData.timestamp).toLocaleString("ru-RU")}

Не забудьте обработать заявку!
        `.trim();

    // Получаем всех администраторов из базы данных
    const db = require("./db/db");

    db.all(
      `SELECT telegram_id FROM bot_users WHERE is_active = 1`,
      (err, admins) => {
        if (err) {
          console.error("Error getting admins:", err);
          return;
        }

        // Отправляем сообщение всем администраторам
        admins.forEach((admin) => {
          // Сначала отправляем текстовое сообщение
          bot
            .sendMessage(admin.telegram_id, message)
            .then(() => {
              console.log(`✅ Message sent to admin ${admin.telegram_id}`);

              // Если есть файл, отправляем его
              if (filePath && fs.existsSync(filePath)) {
                // Определяем тип файла для правильного метода отправки
                const fileExt = path.extname(filePath).toLowerCase();

                if ([".pdf"].includes(fileExt)) {
                  // Для PDF
                  return bot.sendDocument(admin.telegram_id, filePath, {
                    caption: `📎 Прикрепленный файл: ${formData.fileOriginalName}`,
                  });
                } else if (
                  [".jpg", ".jpeg", ".png", ".gif"].includes(fileExt)
                ) {
                  // Для изображений
                  return bot.sendPhoto(admin.telegram_id, filePath, {
                    caption: `📎 Прикрепленный файл: ${formData.fileOriginalName}`,
                  });
                } else if ([".doc", ".docx", ".txt"].includes(fileExt)) {
                  // Для документов
                  return bot.sendDocument(admin.telegram_id, filePath, {
                    caption: `📎 Прикрепленный файл: ${formData.fileOriginalName}`,
                  });
                } else {
                  // Для остальных типов
                  return bot.sendDocument(admin.telegram_id, filePath, {
                    caption: `📎 Прикрепленный файл: ${formData.fileOriginalName}`,
                  });
                }
              }
            })
            .then(() => {
              if (filePath) {
                console.log(`✅ File sent to admin ${admin.telegram_id}`);
              }
            })
            .catch((error) => {
              console.error(`❌ Error sending to ${admin.telegram_id}:`, error);
            });
        });
      }
    );
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
  }
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});

// Обработка ошибок multer
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        error: "Файл слишком большой. Максимальный размер: 10 МБ",
      });
    }
  }
  next(error);
});

// Обработка 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found",
    path: req.path,
    method: req.method,
  });
});

// Обработка ошибок
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    success: false,
    error: "Internal server error",
  });
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log("🚀 Server is working on https://fcore.tech:" + PORT);
  console.log("🌍 Environment:", process.env.NODE_ENV);
  console.log("📊 UTM tracking enabled");
  console.log("📝 Form processing enabled");
  console.log("📁 File uploads enabled (uploads directory)");
  console.log("🤖 Telegram notifications enabled");
});
