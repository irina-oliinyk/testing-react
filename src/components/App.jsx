// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Product from './Product';
// import AppBooks from './books';
// import  Card  from './Card';
import { Alert } from './Alert/Alert';


export default function App() {
  return (
    <div>
      <h1>Card title</h1>
     <Alert variant="info" outlined>
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>
      
    </div>
  );
}



//  <Card>
// 	     <h1>Card title</h1>
// 	     <p>Text between opening and closing tag</p>
//       </Card>
//       <AppBooks />
//       <h1>Products</h1>
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
      