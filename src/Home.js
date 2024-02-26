import BlogList from './BlogList';
import useFetch from './useFetch';

export default function Home() {
    const {datas, error, isPending} = useFetch('http://localhost:8000/blogs');
    return (
      <div className='home'>
        {error && <div>{error}</div>}
        {isPending && <div>Loading ...</div>}
        { datas && <BlogList blogs={datas} title= {"All Blogs!"}/>}
      </div>
    )
}
