# EmailJS Setup Guide

This guide will help you set up EmailJS to receive emails when users submit the contact form on your website.

---

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up Free"** 
3. Sign up with your Google account or create a new account
4. Choose the free plan (you get 200 for free)

---

## emails/month Step 2: Get Your Public Key

1. After logging in, you'll be taken to the EmailJS dashboard
2. Click on **"Account"** in the left sidebar
3. Look for **"Public Key"** (it looks like a long alphanumeric string like `abc123-def456-ghi789`)
4. **Copy this key** - you'll need it later

---

## Step 3: Create an Email Service

1. Click on **"Email Services"** in the left sidebar
2. Click **"Add New Service"** button (you may need to click "+" icon)
3. Choose **"Gmail"** (recommended) or another email provider
4. Follow the steps to connect your Gmail account:
   - Click "Connect Gmail Account"
   - Sign in with your Google account
   - Grant EmailJS permission to send emails
5. Give your service a name (e.g., "My Portfolio Contact")
6. Click **"Create Service"**
7. **Copy the Service ID** (it will be something like `service_abc123`)

---

service_zq1b0p5

## Step 4: Create an Email Template

1. Click on **"Email Templates"** in the left sidebar
2. Click **"Create New Template"** button (you may need to click "+" icon)
3. You can start from scratch or use a blank template
4. Design your email template with the following:

```
Subject: New Contact Form Submission from {{from_name}}

You have a new message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

5. Click the **"Save"** button (💾 icon)
6. **Copy the Template ID** (it will be something like `template_xyz789`)

template_jzg4ihn
---

## Step 5: Update Your .env.local File

Now replace the placeholder values in your `.env.local` file with the actual credentials:

```
REACT_APP_EMAILJS_SERVICE_ID=service_abc123    <-- Replace with your Service ID
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789  <-- Replace with your Template ID
REACT_APP_EMAILJS_PUBLIC_KEY=abc123-def456-ghi789  <-- Replace with your Public Key
```

---

## Step 6: Restart Your Development Server

1. Stop your current development server (Ctrl+C)
2. Start it again:
   ```
   npm start
   ```

The environment variables will only be loaded when you restart the server!

---

## Step 7: Test It Out

1. Go to your website's contact page
2. Fill out the form with:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
3. Click "Send Message"
4. Check your email inbox for the test message

---

## Troubleshooting

### "Message mocked (EmailJS keys not configured)" appears
- Make sure you've updated the `.env.local` file with real values
- Make sure you've restarted the server after updating the file

### Emails not being received
- Check your spam folder
- Verify the email template is saved
- Make sure the Service ID and Template ID are correct

### Check the browser console
- Open browser Developer Tools (F12)
- Go to the Console tab
- Look for any error messages when submitting the form

---

## Important Notes

1. **.env.local is already in .gitignore** - Your API keys are safe and won't be committed to GitHub

2. **For production deployment** (like Vercel or Netlify):
   - Add the same environment variables in your hosting platform's settings
   - The variable names must match exactly (without the `REACT_APP_` prefix on some platforms)

3. **EmailJS Free Plan Limits**:
   - 200 emails per month
   - 1 email service
   - 2 templates

---

If you encounter any issues, feel free to ask for help!

