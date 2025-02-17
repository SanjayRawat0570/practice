import { useDispatch } from 'react-redux'
import { getMatchSuccess } from '../redux/Actions';

function Matches() {
    // const store=useSelector(state=>state);
    const action=useDispatch();
    const fetchData=()=>{
        fetch(`https://jsonmock.hackerrank.com/api/football_matches?page=2`)
        .then(res=>res.json())
        .then(data=>{
            action(getMatchSuccess(data.data));
        })
    }
  return (
    <>
     <button onClick={fetchData}>Get Matches</button>

    </>
  )
}

export default Matches