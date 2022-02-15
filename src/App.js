import React, { useState, useEffect } from 'react';
import Posts from './Components/Posts';
import Pagination from './Components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(()=>{
    fetchPosts()
  },[])

  const fetchPosts = async () => {   
    const res = await axios.get('http://localhost:4000/datas');
    setPosts(res.data);   
  };


  const LastPost = currentPage * postsPerPage;
  const FirstPost = LastPost - postsPerPage;
  const currentPosts = posts.slice(FirstPost, LastPost);


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Pagination Project</h1>
      <Posts posts={currentPosts}  />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
