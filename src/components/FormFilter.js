import { useState } from "react";

const FormFilter = ({posts, setPosts}) => {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`The name you entered was: ${keyword}`)

      posts = posts.filter((post)=>post.title.includes(keyword));

      console.log(posts);
    }

    return <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Search..." name="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
    <button>Search</button>
    <div>
      <input type="number" name="filterByUser" id="filterByUser" />
      <label htmlFor="filterByUser">Only show posts from user</label>
    </div>
  </form>
}

export default FormFilter;