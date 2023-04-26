import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [comments, setComments] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>Read Comments:</p>
        {comments && comments.map(blog => (
          <div key={blog.id}>{blog.comment}</div>
        ))}
      </header>
    </div>
  );
}

export default App;