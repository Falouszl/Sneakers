import React from "react";
import styles from './Card.module.scss';
console.log(styles)

function Card({ onFavourite , title , imageUrl , price , onPlus }) {
    const [isAdded , setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ title , imageUrl , price })
        setIsAdded(!isAdded)
    }
    return (
    <div className={styles.card}>
        <div className={styles.favourite} onClick={onFavourite}>
           <img src="/img/heart.svg" alt="Unliked"/>
        </div>
        <img width={133} height={112} src={imageUrl}/>
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Цена :</span>
               <b>{price}</b>
            </div>
            <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}/>
        </div>
    </div>

    
    )
}

export default Card
