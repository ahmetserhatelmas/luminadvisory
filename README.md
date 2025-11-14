# Lumin Sustainability Website

Welcome to your custom-built website for **Lumin Sustainability**. This README file will guide you step-by-step on how to manage the site, edit content, and understand the tools that power it.

This project is built with modern web technologies, hosted on Vercel, and designed for performance, accessibility, and sustainability compliance.

---

## 📁 Project Overview

This website is built using:

* **Framework**: Next.js (React-based)
* **Styling**: Tailwind CSS (utility-first CSS framework)
* **Animation**: Framer Motion (used for interactive UI elements)
* **Form Handling**: Custom backend API with Supabase + Resend (to store messages and send email)
* **Hosting**: Vercel
* **Domain**: Connected to `luminsustainability.com`

---

## File Structure & Key Files

Here are the most important files and folders you need to know:

* `pages/page.tsx`: This is the main homepage content.
* `components/ui/`: This folder holds sections like the header, footer, about section, contact form, service pillars, etc.
* `public/`: Stores images and your logo.
* `styles/globals.css`: Controls the styling of the site (colors, background, layout).

---

## How to View the Website Live

Your site is live on Vercel. To view:

1. Go to: [https://luminsustainability.com](https://luminsustainability.com)
2. You’ll always see the latest version here if changes were pushed.

---

## How to Make Simple Edits (No Coding Experience)

### 1. Text Content

If you want to change text like headings or descriptions:

* Go to the file that controls that section (example: `page.tsx` or `about.tsx`)
* Look for the actual sentence inside quotes, for example:

  ```tsx
  <h1>Science-driven sustainability advisory for innovation</h1>
  ```

  Change the sentence, save the file, and deploy the update.

### 2. Images or Logos

* You can replace images inside the `public/` folder.
* For example, if your logo is in `public/Lumin_logo_1.png`, just replace it with a new image (same name).

### 3. Contact Form Inbox

Messages sent from the contact form are:

* **Stored in Supabase** (online database)
* **Emailed to you via Resend**

Make sure:

* Your environment variables are correct (see `.env` section below).
* You’ve set up a custom domain email if you're using one.

---

## How Contact Form Works

When someone fills in the form:

1. The message is stored securely in your **Supabase database**.
2. An email is sent to your email (set in `.env` as `CONTACT_TO`).

To check stored messages:

* Log in to your **Supabase project**
* Go to the `contact_messages` table

If you're not receiving emails:

* Ensure your **Resend domain is verified**
* Ensure **you've added the right DNS records** on your domain host

---

## Hosting, Deployment & Management

Your project is hosted on **Vercel**.

### To deploy updates:

1. Push changes to GitHub `main` branch
2. Vercel will automatically update the live site

If you don’t want to use GitHub:

* You can also manually upload the project to Vercel

---

## Environment Variables (`.env` setup)

Environment variables are used to connect external services securely.

Check `vercel > Environment Variables` and make sure these are added:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_secret_key
RESEND_API_KEY=your_resend_key
CONTACT_TO=you@yourdomain.com
CONTACT_FROM=contact@yourdomain.com
```

---


* All icons are from **Lucide React**.
* The site uses **Tailwind CSS** for styling — a very clean and powerful way to handle design.
* Everything is **responsive** — looks good on mobile, tablet, desktop.
* You can add animations or adjust design using Framer Motion or Tailwind utilities.

---



