# Notes App

A full-stack web application to create, edit, and delete notes with storage.

## Features
- ✅ Create new notes
- ✅ Edit existing notes
- ✅ Delete notes
- ✅ View all notes (newest first)
- ✅ Notes stored permanently in database

## Tech Stack

- **Frontend:** React.js with Axios
- **Backend:** Django REST Framework
- **Database:** SQLite

## Installation

### Backend Setup
```bash
cd notes-app
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend runs on `http://localhost:8000`

### Frontend Setup
```bash
cd notes-frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## Project Structure
