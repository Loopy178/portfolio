# Deployment Guide

This guide will help you deploy your portfolio website with the frontend on Vercel and backend on Render.

## Frontend Deployment (Vercel)

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the framework (Vite)
5. Click "Deploy"

Your frontend will be live at: `https://your-project.vercel.app`

## Backend Deployment (Render)

### Steps:

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `krish-portfolio-api` (or any name)
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: Leave empty
   - **Build Command**: `pip install -r backend/requirements.txt`
   - **Start Command**: `cd backend && python main.py`
   - **Environment**: `Python 3`

5. Click "Create Web Service"

Your API will be live at: `https://krish-portfolio-api.onrender.com`

## Connect Frontend to Backend

After deploying both:

1. Update the CORS origins in `backend/main.py`:
```python
allow_origins=[
    "http://localhost:8080",
    "https://your-project.vercel.app",  # Your actual Vercel URL
],
```

2. Update the Contact form in `src/components/Contact.tsx`:
```typescript
const response = await fetch('https://your-render-app.onrender.com/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

3. Commit and push changes - both will auto-deploy!

## Optional Enhancements

### Email Notifications

To receive emails when someone contacts you:

1. Sign up for [SendGrid](https://sendgrid.com) (free tier available)
2. Get your API key
3. Add environment variable to Render: `SENDGRID_API_KEY`
4. Install sendgrid: Add `sendgrid` to `backend/requirements.txt`
5. Update `backend/main.py` to send emails

### Custom Domain

#### Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

#### Render:
1. Go to Dashboard → Settings → Custom Domain
2. Add your custom domain
3. Follow DNS configuration instructions

## Environment Variables

### Vercel (Frontend)
No environment variables needed for the basic setup.

### Render (Backend)
Optional variables:
- `PORT` - Automatically set by Render
- `SENDGRID_API_KEY` - If using email service
- `DATABASE_URL` - If adding database

## Testing

After deployment:

1. Visit your Vercel URL to see the portfolio
2. Test the contact form
3. Check Render logs to see if messages are received
4. Verify all project links work correctly

## Troubleshooting

### Frontend Issues:
- Check Vercel deployment logs
- Ensure all imports are correct
- Verify routing configuration

### Backend Issues:
- Check Render logs for errors
- Verify Python version compatibility
- Check CORS configuration
- Test API endpoints directly

## Monitoring

- **Vercel**: Monitor deployments and analytics in Vercel dashboard
- **Render**: Check logs and metrics in Render dashboard
- Consider adding error tracking (Sentry) for production

---

Need help? Check the documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Render Docs](https://render.com/docs)
