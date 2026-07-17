# cPanel Node.js Deployment Guide - mkf-website

## ✅ Completed Steps

- [x] Repository cloned to server: `/home/mamabzbt/repositories/mkf-website`
- [x] Environment file created at: `/home/mamabzbt/repositories/mkf-website/.env`
- [x] Git repository up-to-date with main branch

## 📋 Server Information

- **Host**: 198.54.119.162:21098
- **User**: mamabzbt
- **Project Path**: `/home/mamabzbt/repositories/mkf-website`
- **Domain**: mamakevinafoundation.com

## 🚀 Next Steps: Configure in cPanel Web Interface

### Step 1: Log into cPanel
1. Go to your Namecheap cPanel URL (typically `https://198.54.119.162:2083`)
2. Log in with your cPanel username and password

### Step 2: Create/Configure Node.js App
1. Navigate to **Software** section → **Setup Node.js App**
2. Click **Create Application** or select an existing one
3. Fill in the following details:

   **Application Configuration:**
   - **Application root**: `/home/mamabzbt/repositories/mkf-website`
   - **Application URL**: `mamakevinafoundation.com`
   - **Application startup file**: `.next/standalone/server.js`
   - **Node.js version**: v20.9+ (select the latest LTS available)
   - **Application mode**: `production`

4. Click **Create**

### Step 3: Install Dependencies and Build

Once the Node.js app is created in cPanel, you need to build the application. You have two options:

#### Option A: Build via SSH (Recommended)
Run this command on the server:

```bash
cd /home/mamabzbt/repositories/mkf-website
npm install
npm run build
```

#### Option B: Build via cPanel Terminal
1. In cPanel, go to **Terminal** (under **Advanced** section)
2. Run:
   ```bash
   cd ~/repositories/mkf-website && npm install && npm run build
   ```

### Step 4: Set Environment Variables in cPanel

1. In cPanel → **Setup Node.js App**
2. Select your application
3. Scroll to **Environment Variables** section
4. Add or update the following variables:

   | Variable | Value | Notes |
   |----------|-------|-------|
   | `RESEND_API_KEY` | `re_xxxxxxxxxxxx` | Get from https://resend.com/api-keys |
   | `NODE_ENV` | `production` | Already set in .env file |

5. Save the environment variables

### Step 5: Start/Restart the Application

1. In cPanel → **Setup Node.js App**
2. Select your application
3. Click **Restart** to start the Node.js application
4. Verify status shows **Running**

## ✨ Expected Output

After successful deployment:
- Your site should be live at: **https://mamakevinafoundation.com**
- Contact form should send emails via Resend
- Portfolio gallery and navbar should be fully functional

## 🔍 Troubleshooting

### Application Not Starting
- Check the **Application Startup File** is set to: `.next/standalone/server.js`
- Verify **Node.js version** is v20.9 or higher
- Check error logs in cPanel → **Setup Node.js App** → View Logs

### Contact Form Not Working
- Verify `RESEND_API_KEY` is correctly set in environment variables
- Check the API key is valid at https://resend.com/api-keys

### Build Failed
If `npm run build` fails, check:
- All dependencies installed: `npm install`
- Correct Node.js version: `node --version` (should be v20.9+)
- Check error messages in terminal output

## 📊 Current Deployment Status

```
✅ Repository: Cloned and up-to-date
✅ Environment File: Created (.env)
✅ Project Files: Ready
⏳ Node.js Installation: Pending (via cPanel)
⏳ Dependencies: Pending (npm install)
⏳ Build: Pending (npm run build)
⏳ cPanel Configuration: Pending
⏳ Application Start: Pending
```

## 🔒 Security Notes

1. **RESEND_API_KEY**: Keep this secret. Never commit to git.
2. **SSH Password**: Only share with trusted sources
3. **Environment Variables**: Always use cPanel's environment variable interface, not hardcoding

## 📞 Support

If you encounter issues:
1. Check the error logs in cPanel
2. Verify all configuration matches this guide
3. Ensure domain DNS is properly pointed to this cPanel server

---

**Last Updated**: 2026-07-15
**Application**: mkf-website (Next.js 16.2.10)
