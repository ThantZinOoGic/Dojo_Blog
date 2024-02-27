import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create ()
{
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('AuthorTwo');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = {title, body, author};
    fetch('https://json-server-gamma-two.vercel.app/blogs', {
        method : "POST",
        headers : {"Content-Type" : "application-json"},
        body : JSON.stringify(blog)
    }). then(() => {
        setIsPending(false);
        console.log("Created")
        navigate('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={submitHandler}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="AuthorOne">AuthorOne</option>
          <option value="AuthorTwo">AuthorTwo</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding ...</button>}
      </form>
    </div>
  );
}
 