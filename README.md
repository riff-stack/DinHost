# DinHost Landing Page

Next.js 14 + Tailwind CSS landing page untuk layanan Bot WhatsApp DinHost.

## Setup Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## ⚠️ Sebelum Deploy — Ganti Link Grup

Edit file `lib/constants.ts`, ganti baris ini:

```ts
export const WA_GROUP = "https://chat.whatsapp.com/GANTI_LINK_GRUP_DISINI";
```

## Deploy ke Vercel

1. Push ke GitHub
2. Login vercel.com → Import repo ini
3. Klik Deploy — selesai!
