import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
  let number;
  const [items , setItems] = React.useState([]);
  const [cartItems , setCartItems] = React.useState([]);
  const [cartItemsPrice = 0 , setCartItemsPrice] = React.useState([]);
  const [cartOpened , setCartOpened] = React.useState(false);
  const [cartFee , setCartFee] = React.useState([]);

  React.useEffect(() => {
    fetch('https://62892b9910e93797c1633d2e.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json) 
    });
  } , []);
  let sum = 0;
  const countFee = (sum) => {
    setCartFee(() => sum = sum * 0.05)
  }
  const onAddToCart = (obj) => {
    setCartItems(() => [...cartItems , obj])
  }
  const onDeleteCart = (obj) => {
    setCartItems(cartItems.filter( elm => elm  == obj ))
  }
  const priceTotal = (obj) => {
    console.log(cartItemsPrice)
    setCartItemsPrice(() => cartItemsPrice =  cartItemsPrice + obj.price );
    // countFee(sum);
  }
  console.log(cartItems)

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onDelete = {(obj) =>  onDeleteCart(obj)} sum = {cartItemsPrice} items={cartItems}  onClose={() => setCartOpened(false)}/> }
      <Header onClickCart={() => setCartOpened(true)}/>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск ..."/>
          </div>
        </div>


        <div className="d-flex flex-wrap">
            {items.map((item) => (
              <Card
                title={item.title}
                price={item.price} 
                imageUrl={item.imageUrl}
                onFavourite = {() => console.log('Добавили закладки')}
                onPlus = {(obj) => onAddToCart(obj)}  />
            ))}
        </div>
        


      </div>
    </div>
  );
}

export default App;
