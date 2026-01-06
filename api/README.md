# Portfolio Backend API

FastAPI backend for Brijesh Patel's portfolio website.

## Features

- Contact form submission endpoint
- CORS enabled for frontend integration
- Health check endpoint
- Ready for Render deployment

## Local Development

1. Install dependencies:
```bash
cd api
pip install -r requirements.txt
```

2. Run the server:
```bash
python main.py
```

The API will be available at `http://localhost:8000`

## API Endpoints

- `GET /` - Root endpoint with API info
- `GET /health` - Health check endpoint
- `POST /api/contact` - Submit contact form
  - Body: `{ "name": "string", "email": "string", "message": "string" }`

## Deploy to Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the following:
   - **Build Command**: `pip install -r api/requirements.txt`
   - **Start Command**: `cd api && python main.py`
   - **Environment**: Python 3

4. Add environment variables if needed (for email services, etc.)

## Environment Variables (Optional)

- `PORT` - Server port (default: 8000)
- Add email service credentials if implementing email notifications

## Frontend Integration

Update your frontend Contact component to use this API:

```typescript
const response = await fetch('https://your-render-app.onrender.com/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```
