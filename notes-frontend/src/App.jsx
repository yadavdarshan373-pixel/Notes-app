import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header';
import Sidebar from './components/Sidebar';
import Footer from './components/footer';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);

  const fetchNotes = () => {
    axios.get('http://127.0.0.1:8000/api/notes/')
      .then(response => setNotes(response.data))
      .catch(error => console.error('Error fetching notes:', error));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      axios.put(`http://127.0.0.1:8000/api/notes/${editingId}/`, { title, content })
        .then(() => {
          setEditingId(null);
          setTitle('');
          setContent('');
          fetchNotes();
        })
        .catch(error => console.error('Error updating note:', error));
    } else {
      axios.post('http://127.0.0.1:8000/api/notes/', { title, content })
        .then(() => {
          setTitle('');
          setContent('');
          fetchNotes();
        })
        .catch(error => console.error('Error adding note:', error));
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/notes/${id}/`)
      .then(() => fetchNotes())
      .catch(error => console.error('Error deleting note:', error));
  };

  const handleEditClick = (note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setTitle('');
    setContent('');
  };

  return (
    <div className="app-layout">
    <Header />
    <div className="app-body">
      <Sidebar />
      <div className="app-container">
        <h1>My Notes</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">{editingId ? 'Update Note' : 'Add Note'}</button>
          {editingId && (
            <button type="button" onClick={handleCancelEdit}>Cancel</button>
          )}
        </form>

        {notes.map(note => (
          <div className="note-card" key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <small>{note.date}</small>
            <button onClick={() => handleEditClick(note)}>Edit</button>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default App;