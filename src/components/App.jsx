// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
// import Product from './Product';
// import AppBooks from './books';
// import  Card  from './Card';
// import { Alert } from './Alert/Alert';
import Icons from './Icons/Icons';
// import { ClickUser } from './Click/Click';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import Articles from './Articles/Articles';

// import LoginForm from './LoginForm/LoginForm';

export default function App() {
  // Колбек-функція для обробки сабміту форми
  // const handleLogin = userData => {
  //   // Виконуємо необхідні операції з даними
  //   console.log(userData);
  // };

  return (
    <div>
      <Icons />
      <Articles />
      <h1>Please login to your account!</h1>

      {/* Передаємо колбек як пропс форми */}
      {/* <LoginForm onLogin={handleLogin} /> */}
      <FeedbackForm />
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

// <ClickUser />
//       <AppBooks />
//       <ClickUser />
//       <h2>Products</h2>
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
//       <h2>Text alert</h2>
//       <Alert variant="info" outlined>
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error" outlined>
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success" elevated>
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning" outlined elevated>
//         Please update your profile contact information
//       </Alert>
