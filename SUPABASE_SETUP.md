# 🚀 Supabase Setup Guide för Tompa

## 📋 **Vad som redan är gjort:**
✅ Babel-konfiguration uppdaterad  
✅ Package.json uppdaterad med dependencies  
✅ .gitignore uppdaterad för säkerhet  
✅ Supabase service-filer skapade  
✅ Environment variables konfigurerade  

## 🔧 **Vad du behöver göra:**

### **Steg 1: Installera dependencies**
I terminalen, i projektets rot:
```bash
npm install
```

### **Steg 2: Skapa .env-fil**
I projektets rot, skapa en fil som heter `.env`:
```bash
# .env
SUPABASE_URL=https://din-project-url.supabase.co
SUPABASE_ANON_KEY=din-anon-nyckel-här
```

### **Steg 3: Hitta dina Supabase-nycklar**
1. Gå till [supabase.com](https://supabase.com)
2. Logga in på ditt projekt
3. Klicka "Settings" → "API"
4. Kopiera:
   - **Project URL** → SUPABASE_URL
   - **anon public** → SUPABASE_ANON_KEY

### **Steg 4: Skapa databastabeller**
1. I Supabase, gå till "SQL Editor"
2. Klicka "New query"
3. Kopiera och klistra in SQL-koden från `src/services/supabase.ts`
4. Klicka "Run"

### **Steg 5: Testa appen**
1. Starta om din app: `npm start`
2. Gå till "Skapa Konto"
3. Skapa en användare
4. Försök logga in

## 🛡️ **Säkerhet:**
- `.env` filen är redan tillagd i `.gitignore`
- Dina nycklar kommer aldrig laddas upp till GitHub
- Samma metod som stora företag använder

## 🚨 **Om något inte fungerar:**
1. Kontrollera att du kopierat rätt nycklar
2. Kontrollera att du skapat databastabellerna
3. Starta om appen efter ändringar
4. Kolla terminalen för felmeddelanden

## 📱 **För App Store:**
- Samma .env-fil används för alla miljöer
- Nycklarna bäddas in i appen vid bygge
- Säker för produktion

## 🎯 **Nästa steg efter detta:**
- Testa användarregistrering
- Testa inloggning
- Implementera träningsfunktioner
- Lägg till real-time uppdateringar

## ❓ **Behöver du hjälp?**
Om något inte fungerar, kolla:
1. Att .env-filen finns i projektets rot
2. Att nycklarna är korrekt kopierade
3. Att databastabellerna är skapade
4. Att appen startats om efter ändringar

**Lycka till! 🚀✨**
