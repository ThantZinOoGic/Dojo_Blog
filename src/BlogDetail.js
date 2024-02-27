import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch';

export default function BlogDetail() {
  let {id} = useParams();
  let navigate = useNavigate();
  const {datas : blog, error, isPending} = useFetch('https://json-server-gamma-two.vercel.app/blogs/' + id);
  const deleteHandler = () => {
    fetch('https://json-server-gamma-two.vercel.app/blogs/' + blog.id,{
      method : "DELETE",
      }). then(() => 
      {
        navigate('/');
      })
  }
  return (
    <div className='blog-details'>
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Writing by - {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={deleteHandler}>Delete</button>
        </article>
      )}
    </div>
  )
}

