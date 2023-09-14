import React from "react";
import './cart.css'
import { BoldOutlined } from "@ant-design/icons";
import Nav from "../layout/Nav";

const items = [
  {
    id: 1,
    name: "Idlies",
    price: 35
  },
  {
    id: 2,
    name: "Dal Curry",
    price: 88
  },
  {
    id: 3,
    name: "Palak Paneer",
    price: 86
  },
  {
    id: 4,
    name: "Sushi",
    price: 93
  },
  {
    id: 5,
    name: "Paneer Butter Masala",
    price: 550
  },
  {
    id: 6,
    name: "Parotta",
    price: 110
  },
  {
    id: 7,
    name: "Pani Puri",
    price: 180
  },
  {
    id: 8,
    name: "Tandoori Chicken",
    price: 680
  },
  {
    id: 9,
    name: "Chola Puri",
    price: 427
  },
  {
    id: 10,
    name: "Brownies",
    price: 466
  },
  {
    id: 11,
    name: "Curd",
    price: 98
  },
];

// const Shop = () => {
//   const [cart, setCart] = React.useState([]);
//   const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

//   const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

//   const removeFromCart = (item) => {
//     setCart((currentCart) => {
//       const indexOfItemToRemove = currentCart.findIndex(
//         (cartItem) => cartItem.id === item.id
//       );

//       if (indexOfItemToRemove === -1) {
//         return currentCart;
//       }

//       return [
//         ...currentCart.slice(0, indexOfItemToRemove),
//         ...currentCart.slice(indexOfItemToRemove + 1)
//       ];
//     });
//   };

//   const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

//   const listItemsToBuy = () =>
//     items.map((item) => (
//       <div key={item.id}>
//         {item.name} -{item.price}
//         <button type="submit" onClick={() => addToCart(item)}>
//           Add
//         </button>
//       </div>
//     ));

//   const listItemsInCart = () =>
//     items.map((item) => (
//       <div key={item.name}>
//         ({amountOfItems(item.id)} x {item.price}){item.name}
//         <button type="submit" onClick={() => removeFromCart(item)}>
//           Remove
//         </button>
//       </div>
//     ));

//   return (
//     <div>
//       STORE
//       <div>{listItemsToBuy()}</div>
//       <div>CART</div>
//       <div>{listItemsInCart()}</div>
//       <div>Total: ${cartTotal}</div>
//       <div>
//         <button onClick={() => setCart([])}>Clear</button>
//       </div>
//     </div>
//   );
// };

// export default Shop;


const Shop = () => {
    const [cart, setCart] = React.useState([]);
    const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);
  
    const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);
  
    const removeFromCart = (item) => {
      setCart((currentCart) => {
        const indexOfItemToRemove = currentCart.findIndex(
          (cartItem) => cartItem.id === item.id
        );
  
        if (indexOfItemToRemove === -1) {
          return currentCart;
        }
  
        return [
          ...currentCart.slice(0, indexOfItemToRemove),
          ...currentCart.slice(indexOfItemToRemove + 1)
        ];
      });
    };
  
    const amountOfItems = (id) => cart.filter((item) => item.id === id).length;
  
    const listItemsToBuy = () =>
      <>
    <Nav/>
<div className="container mt-3">
    <h1>Calorie Counter</h1>
    <br/>
    <table className="table table-warning table-striped-columns">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Food Name</th>
              <th scope="col">Calories in KCal</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td><h6>{item.name}</h6></td>
                <td><h6>{item.price}</h6></td>
                <td>
                <button type="submit" className="btn-c" id="add" onClick={() => addToCart(item)}>
            +
          </button>
           {amountOfItems(item.id)} 
           <button type="submit" className="btn-c" id="sub" onClick={() => removeFromCart(item)}>
             -
           </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </>

        // <div className="map" key={item.id}>
        //   {item.name} -{item.price}
        //   <button type="submit" className="btn-c" id="add" onClick={() => addToCart(item)}>
        //     +
        //   </button>
        //   {amountOfItems(item.id)} 
        //   <button type="submit" className="btn-c" id="sub" onClick={() => removeFromCart(item)}>
        //     -
        //   </button>
        // </div>
  
    const listItemsInCart = () =>
      items.map((item) => <div className="map" key={item.name}></div>);
  
    return (
      <div>
        <div className="return">{listItemsToBuy()}</div>
        {/* <div>CART</div> */}
        <div className="return">{listItemsInCart()}</div>
        <div>
        <button className="clear-btn" onClick={() => setCart([])}>Clear</button>
        </div>
        <div className="return"><h1>Total: {cartTotal} KCal</h1></div>
      </div>
      
    );
  };
  
  export default Shop;