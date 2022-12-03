const FormFilter = () => {
    return <form>
    <input type="text" placeholder="Search..." name="keyword" />
    <button>Search</button>
    <div>
      <input type="number" name="filterByUser" id="filterByUser" />
      <label htmlFor="filterByUser">Only show posts from user</label>
    </div>
  </form>
}

export default FormFilter;