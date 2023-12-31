import  { useCallback, useState } from 'react'

const useHttp = () => {
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(null);

    const sendRequest = useCallback( async(requestConfig , applyData) => {

       const identifier = setInterval(()=>{
            setIsLoading(true);
            return () => clearInterval(identifier);
        }, 10000)
        
        setError(null);

        try{
            const response = await fetch(
                requestConfig.url , {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                    headers: requestConfig.headers ? requestConfig.headers : {},
                }
            );

            if(!response.ok){
                throw new Error('Request failed');
            }

            const data = await response.json();
            applyData(data);

        }catch(err){
            setError('something went wrong');
        }
        setIsLoading(false);
    }, []);

   
  return {
    isLoading,
    error,
    sendRequest,
  };
}

export default useHttp
