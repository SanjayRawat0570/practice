// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// function FilterMatches() {
//     const [selectedOption,setSelectedOption]=useState('select');
//     const matches=useSelector(state=>state.footballMatches);
    
//     const action=useDispatch();
//     // const handleClick=()=>{
//     //     action(filterByTeamName(selectedOption));
//     // }
//     const handleChange=(e)=>{
//         setSelectedOption(e.target.value);
//     }
//   return (
//     <>
//       <h2>Filter Matches</h2>
//       <select>
//         <option value={selectedOption} onChange={handleChange} >select</option>
//         <option value="Bayern Muncich" >Bayern Munich</option>
//         <option value="CSKA Moskva" >CSKA Moskva</option>
//         <option value="Manchester City" >Manchester City</option>
//         <option value="Basel">Basel</option>
//         <option value="AFC Ajax" >AFC Ajax</option>
//       </select>
//       <button onClick={handleClick()}>Get</button>
//     </>
//   )
// }

// export default FilterMatches