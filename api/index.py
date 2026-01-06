from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import os

app = FastAPI(title="Brijesh Patel Portfolio API")

# Configure CORS for Vercel
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080",
        "http://localhost:5173",
        "https://*.vercel.app",  # Allow all Vercel domains
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str

@app.get("/")
async def root():
    return {"message": "Brijesh Patel Portfolio API", "status": "active"}


@app.post("/contact")
async def submit_contact(contact: ContactMessage):
    """
    Handle contact form submissions.
    In production, you would:
    1. Store in database
    2. Send email notification
    3. Integrate with email service (SendGrid, AWS SES, etc.)
    """
    try:
        # Log the message (in production, save to database or send email)
        print(f"Contact form submission from {contact.name} ({contact.email}): {contact.message}")
        
        # TODO: Add email sending logic here
        # Example with SendGrid:
        # send_email(
        #     to="krajani@ualberta.ca",
        #     subject=f"Portfolio Contact: {contact.name}",
        #     body=f"From: {contact.email}\n\n{contact.message}"
        # )
        
        return {
            "success": True,
            "message": "Thank you for your message! I'll get back to you soon."
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
