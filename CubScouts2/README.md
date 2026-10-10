# منصة الأشبال الذكية ⚜️

تطبيق ويب/PWA/Android (React + Vite + Firebase + Capacitor) لقادة الكشافة والأشبال وأولياء الأمور.

## التشغيل محلياً
```
npm install
npm run dev
```

## الفحص والبناء
```
npm run typecheck
npm run build                          # Firebase Hosting / Android (base='/')
VITE_BASE=/CubScouts/ npm run build    # GitHub Pages
```

## الأمان — قائمة القادة
قائمة القادة موجودة في مكانين ويجب تعديلهما معاً:
1. `src/utils/security.ts` (الواجهة)
2. `firestore.rules` دالة `isLeader()` (الفرض الفعلي)

ثم انشر القواعد: `firebase deploy --only firestore:rules`.
لا ترفع أي ملف `.jks` أو أسرار إلى git.
