import React from "react";
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader";
import AppContext from "../../context";

function Card({ onFavorite , title , imageUrl , price , id , parentId,  onPlus, favorited = false , loading = false }) {

    const { isItemAdded } = React.useContext(AppContext)
    const [isFavourite, setIsFavourite] = React.useState(favorited)
    const obj = { title , parentId:id, imageUrl , price , id }

    const onClickPlus = () => {
        onPlus(obj)
    }


    const onClickFavorite = () => {
        onFavorite(obj)
        setIsFavourite(!isFavourite)
    }
    return (
    <div className={styles.card}>
    {
        loading ? 
            <ContentLoader 
                speed={2}
                width={210}
                height={253}
                viewBox="0 0 197 253"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
        
                <rect x="0" y="0" rx="10" ry="10" width="155" height="155" /> 
                <rect x="0" y="167" rx="5" ry="5" width="155" height="15" /> 
                <rect x="0" y="187" rx="5" ry="5" width="100" height="15" /> 
                <rect x="0" y="220" rx="5" ry="5" width="80" height="25" /> 
                <rect x="124" y="214" rx="10" ry="10" width="32" height="32" />
            </ContentLoader>
             : 
                <>
                {onFavorite && 
                    <div className={styles.favourite} onClick={onClickFavorite}>
                        <img src={!isFavourite ? "img/heart.svg" : "img/liked.svg" } alt="Unliked"/>
                    </div>
                }

                <img width='100%' height={135} src={imageUrl}/>
                <h5>{title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена :</span>
                        <b>{price}</b>
                    </div>
                    {onPlus && 
                        <img className={styles.plus}
                            onClick={onClickPlus} 
                            src={isItemAdded(id) ? 'img/btn-checked.svg' : 'img/btn-plus.svg'
                        }/>
                    }
                </div>
                </>

    }
    </div>

    
    )
}

export default Card
