import { useEffect, useState } from 'react';
import './App.css';
import FormFilter from './components/FormFilter';
import TableList from './components/TableList';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(
      (data)=>{
        setPosts(data)
      },
      (error)=>{
        setError(error)
      }
    );
  },[])

  return (
    <div className="App">
      <FormFilter />
      <TableList posts={posts} error={error} />
    </div>
  );
}

export default App;
