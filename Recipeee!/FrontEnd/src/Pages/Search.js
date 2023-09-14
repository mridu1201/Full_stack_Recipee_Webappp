// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CarSearch = () => {
//   const [keyword, setKeyword] = useState('');
//   const [cars, setCars] = useState([]);
//   const [filteredCars, setFilteredCars] = useState([]);

//   const getAllProducts = () => {
//     if(keyword==="")
//     {
//     fetch('http://localhost:8080/gfood')
//       .then((res) => res.json())
//       .then((result) => {
//       setCars(result);
//         console.log(result);
//       });
//     }
//     else
//     {
//       fetch(`http://localhost:8080/food/${keyword}`)
//       .then((res) => res.json())
//       .then((result) => {
//       setCars(result);
//         console.log(result);
//         if(result.length==='0')
//         {
          
//         }
//       });
//     }
//      };
//      useEffect(() => {
//         getAllProducts();
//     },[keyword]);

 
//   return (
//     <div>
//       <input
//         type="text"
//         value={keyword}
//         onChange={(e) => setKeyword(e.target.value)}
//         placeholder="Search cars..."
//       />

//       {filteredCars.map((car) => (
//         <div key={car.id}>
//           <h3>{car.name}</h3>
//           <p>Model: {car.model}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CarSearch;
import React from 'react'

const Search = () => {
  return (
    <div>
      
    </div>
  )
}

export default Search
