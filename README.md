# 📌 MapMe - Task Manager

🚀 **MapMe** is a sleek and efficient task management application designed to help users stay organized and boost productivity. Built with modern technologies like **Next.js, TypeScript, Tailwind CSS, Zustand, Prisma, and ShadCN UI**, it provides a seamless experience for managing and tracking tasks.

---

## ✨ Features

✅ **Task Management** - Create, edit, and organize your tasks effortlessly.
✅ **User Authentication** - Secure login with Google OAuth.
✅ **Real-time State Management** - Powered by Zustand for a smooth UX.
✅ **Database Integration** - Uses Prisma with PostgreSQL for data storage.
✅ **Modern UI** - Beautiful design with ShadCN UI and Tailwind CSS.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, ShadCN UI
- **State Management**: Zustand
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js (Google OAuth)

---

## ⚙️ Setup & Installation

1️⃣ **Clone the repository**

```bash
 git clone https://github.com/your-username/mapme.git
 cd mapme
```

2️⃣ **Install dependencies**

```bash
pnpm install
```

3️⃣ **Setup environment variables**
Create a `.env` file in the root directory and add:

```env
DATABASE_URL=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_URL=
NEXTAUTH_SECRET=
```

4️⃣ **Run database migrations**

```bash
pnpm prisma migrate dev
```

5️⃣ **Start the development server**

```bash
pnpm dev
```

---

## 🚀 Deployment

MapMe can be deployed on platforms like **Vercel**. Ensure environment variables are configured correctly before deploying.

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use and modify it as needed.

---

🎯 Happy Coding! 🚀
