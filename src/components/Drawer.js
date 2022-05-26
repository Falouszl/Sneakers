import React from "react";

function Drawer({ onClose , onDelete , items = [] , sum = 0 }) {
    
    return (
        <div className="overlay">
            <div className="drawer">
            <h2 className="d-flex justify-between mb-30">Корзина<img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" onClick={onClose}/></h2>

            <div className="items">
                {    console.log(items)}
                {items.map((obj) => (
                    <div className="cartItem d-flex align-center mb-20">
                        <div 
                            style={{backgroundImage: `url(${obj.imageUrl})`}}
                            className="cartItemImg"></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price}</b>
                            </div>
                            <img className="removeBtn" onClick={onDelete}  src="/img/btn-remove.svg" alt="Remove"/>
                        </div>
                ))} 
            </div>
            <div className="cartTotalBlock">
                <ul>
                <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>{sum}</b>
                </li>
                <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>{}</b>
                </li>
                </ul>
                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
            </div>

            </div>
        </div>
    )
}
export default Drawer