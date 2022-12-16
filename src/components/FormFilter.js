import { useState } from "react";

const FormFilter = ({posts, setPosts}) => {
    const [keyword, setKeyword] = useState('');
    const [filterByUserId, setFilterByUserId] = useState('');
    const [error, setError] = useState([]);

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`The name you entered was: ${keyword}`)

      posts = posts.filter((post)=>post.title.includes(keyword));

      console.log(posts);
      setPosts(posts);
    }

    const handleChange = (e)=> {
      setFilterByUserId(e.target.value);  //console.log(e.target.value);

      const API_URL = 'https://jsonplaceholder.typicode.com/posts'; 
      const fetchURL = (e.target.value!='') ? API_URL+'?userId=': API_URL;

      fetch(fetchURL+e.target.value)
      .then(response => response.json())
      .then(
        (data)=>{
          setPosts(data)
        },
        (error)=>{
          setError(error)
        }
      );
      
      //Incorrect
      //posts = posts.filter((post)=>post.userId==e.target.value);
      //setPosts(posts);
      
      console.log(posts);
    }

    return <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Search..." name="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
    <button>Search</button>
    <div>
      <input type="number" name="filterByUser" id="filterByUser" onChange={handleChange} />
      <label htmlFor="filterByUser">Only show posts from user</label>
    </div>
  </form>
}

export default FormFilter;