import { useEffect } from 'react';
import { usestate} from 'react';


function uselocalstorage(key , data){
    const [count , setcount] = usestate(data);
    const savecount = parseInt(localStorage.getItem(key));
    useEffect(() => {
        localStorage.setItem(key, count.tostring());
    }, [count]);
    return {savecount, setcount};
}
export default uselocalstorage;