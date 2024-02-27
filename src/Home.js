import BlogList from './BlogList';
import useFetch from './useFetch';

export default function Home() {
    const {datas, error, isPending} = useFetch('https://json-server-gamma-two.vercel.app/');
    return (
      <div className='home'>
        {error && <div>{error}</div>}
        {isPending && <div>Loading ...</div>}
        { datas && <BlogList blogs={datas} title= {"All Blogs!"}/>}
      </div>
    )
}
