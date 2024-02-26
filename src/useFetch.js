import { useEffect, useState } from 'react';

export default function useFetch(url)
{
    const [datas, setDatas] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();
        setTimeout(()=> {
            fetch(url, {signal : abortCont.signal})
            .then(res => 
                {
                    if(!res.ok){
                        throw new Error("Could not fetch data from resource!");
                    }
                    return res.json()
                }
            )
            .then(data => {
                console.log(data);
                setDatas(data)
                setIsPending(false);
                setError(null);
            })
            .catch(e =>
            {
                    setIsPending(false);
                    setError(e.message);
            });
        }, 2000);
        return ()=>abortCont.abort();
    }, [url]);
    return {datas, error, isPending};
}