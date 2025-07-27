# 📨 Contact Page with EmailJS, PostgreSQL, Prisma, and ShadCN UI

This is a beautiful, full-featured **Portfolio Website** built using modern full-stack tools like **Next.js**, **EmailJS**, **PostgreSQL**, **Prisma**, **Zod validation**, and **ShadCN UI**.

## ✨ Features

- 📧 **EmailJS Integration**: Send user messages directly to your inbox
- 🛡 **Zod Validation**: Secure and user-friendly input validation
- 📩 **Prisma + PostgreSQL**: Store submitted contact messages in the database
- 🗺️ **Map Embedding**: Show your physical location with responsive Google Maps
- 💬 **WhatsApp, Telegram, Gmail Buttons**: Easy contact via social platforms
- 🔄 **Animated Form Loader**: Smooth feedback while sending
- ✅ **React Hot Toaster**: Display success/error messages with style
- 🎨 **ShadCN UI + Tailwind CSS**: Beautiful, accessible, responsive design
- 📱 **Responsive Layout**: Form on left, map on right (desktop), stacked layout (mobile)
- 🔁 **Dual Functionality**: Sends message via EmailJS _and_ stores in DB
- 🆙 **Floating Back To Top Button**: Framer Motion-powered scroll-to-top on every page

## 🛠 Built With

- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [EmailJS](https://www.emailjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Zod](https://zod.dev/)
- [ShadCN UI](https://ui.shadcn.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hot Toast](https://react-hot-toast.com/)

## 📸 Screenshots

> Add some screenshots or gifs here showing form submission, toasts, and responsive design.

## 📦 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Configure Environment Variables**

Create a `.env.local` file and add:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key
```

4. **Push Prisma schema and start dev server**

```bash
npx prisma generate
npx prisma db push
pnpm dev
```

## 🤝 Contributions

Feel free to submit PRs, suggest improvements, or use parts of this template in your own projects 🚀
