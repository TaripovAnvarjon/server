# Spy LMS Server - Doimiy Ishlash Uchun Yo'riqnoma

LMS Monitoring System - Serverning uzluksiz ishlashi uchun sozlangan.

## 🚀 Xususiyatlar

- ✅ **Avtomatik qayta ishga tushirish** - Server xatolik yuz berganda avtomatik qayta ishga tushadi
- ✅ **Health Check** - Server holatini tekshirish uchun endpoint
- ✅ **Graceful Shutdown** - Serverni to'g'ri to'xtatish
- ✅ **PM2 bilan boshqarish** - Professional process manager
- ✅ **Log saqlash** - Xatoliklar va loglarni saqlash

## 📋 Talablar

- Node.js >= 14.0.0
- npm yoki yarn

## 🔧 O'rnatish

1. **Repozitoriyani klonlash:**
```bash
git clone <repository-url>
cd server
```

2. **Bog'liqliklarni o'rnatish:**
```bash
npm install
```

3. **Environment o'zgaruvchilarni sozlash:**
```bash
export ADMIN_PASSWORD="sizning_parolingiz"  # Linux/Mac
set ADMIN_PASSWORD=sizning_parolingiz       # Windows CMD
$env:ADMIN_PASSWORD="sizning_parolingiz"    # Windows PowerShell
```

## 🎯 Ishga Tushirish Usullari

### 1. Oddiy rejim (Development)
```bash
npm start
```

### 2. PM2 bilan (Production - Doimiy ishlash)

**Birinchi marta ishga tushirish:**
```bash
npm run pm2:start
```

**Serverni to'xtatish:**
```bash
npm run pm2:stop
```

**Serverni qayta ishga tushirish:**
```bash
npm run pm2:restart
```

**Loglarni ko'rish:**
```bash
npm run pm2:logs
```

**Server holatini ko'rish:**
```bash
npm run pm2:status
```

**Real-time monitoring:**
```bash
npm run pm2:monit
```

## 🏥 Health Check

Serverni tekshirish uchun:
```bash
curl http://localhost:3000/health
```

Javob:
```json
{
  "status": "ok",
  "uptime": 3600,
  "timestamp": 1676234567890,
  "pages": 15
}
```

## 🌐 Render.com da Deploy qilish

1. **Render.com ga kiring va yangi Web Service yarating**

2. **Repository'ni ulang**

3. **Build Command:**
```bash
npm install
```

4. **Start Command (Oddiy):**
```bash
npm start
```

**Start Command (PM2 bilan):**
```bash
npm install && npm run pm2:start
```

5. **Environment Variables qo'shing:**
```
ADMIN_PASSWORD=sizning_parolingiz
NODE_ENV=production
```

6. **Auto-Deploy ni yoqing**

## 🔐 Xavfsizlik

- `ADMIN_PASSWORD` ni muhofaza qiling
- Environment Variable sifatida saqlang, kodga yozmang
- HTTPS ishlatishni tavsiya qilamiz

## 📂 Fayl Tuzilishi

```
server/
├── app.js                    # Asosiy server fayli
├── ecosystem.config.js       # PM2 konfiguratsiyasi
├── package.json             # Bog'liqliklar va scriptlar
├── logs/                    # PM2 loglari (avtomatik yaratiladi)
│   ├── error.log
│   └── out.log
└── README.md                # Ushbu fayl
```

## 🛠 PM2 Sozlamalari

`ecosystem.config.js` faylida quyidagi sozlamalar mavjud:

- **autorestart**: true - Avtomatik qayta ishga tushirish
- **max_memory_restart**: 1GB - Xotira chegarasida qayta ishga tushirish
- **max_restarts**: 10 - Maksimal qayta ishga tushirish soni
- **min_uptime**: 10s - Minimal ishlash vaqti
- **restart_delay**: 4000ms - Qayta ishga tushirishdan oldin kutish vaqti

## 📊 Monitoring

Server holati va loglarini kuzatish:

```bash
# Real-time monitoring
npm run pm2:monit

# Loglarni ko'rish
npm run pm2:logs

# Process holati
npm run pm2:status
```

## 🔄 Doimiy Ishlash Strategiyasi

1. **Xatoliklarni ushlash** - Process.on() bilan uncaughtException va unhandledRejection
2. **Graceful Shutdown** - SIGTERM va SIGINT signallarini to'g'ri qayta ishlash
3. **Health Check** - Serverni muntazam tekshirish uchun endpoint
4. **PM2 Monitoring** - Process manager orqali avtomatik boshqarish
5. **Log Saqlash** - Xatoliklar va hodisalarni yozib qo'yish

## ⚡ Tezkor Buyruqlar

```bash
# Serverni ishga tushirish
npm run pm2:start

# Holatni tekshirish
npm run pm2:status

# Loglarni ko'rish
npm run pm2:logs

# Serverni to'xtatish
npm run pm2:stop

# Serverni qayta ishga tushirish
npm run pm2:restart
```

## 🆘 Muammolarni hal qilish

**Server ishlamayapti:**
```bash
npm run pm2:status
npm run pm2:logs
```

**Portni band qilgan:**
```bash
# Linux/Mac
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**PM2 xotiradan chiqarish:**
```bash
pm2 delete spy-lms-server
```

## 📞 Yordam

Muammo yuzaga kelsa:
1. `npm run pm2:logs` orqali loglarni tekshiring
2. `/health` endpoint orqali server holatini tekshiring
3. PM2 statusni ko'ring: `npm run pm2:status`

## 📝 Litsenziya

Bu loyiha shaxsiy foydalanish uchun.
