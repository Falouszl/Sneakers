import React from "react"
import Card from "../components/Card"
import AppContext from "../context"
import axios from "axios"


function Orders() {
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    const { onAddToCart , onAddToFavorite} = React.useContext(AppContext)

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://62892b9910e93797c1633d2e.mockapi.io/orders')
                setOrders(data.map((obj) => obj.items).flat())
                setIsLoading(false)
            } catch (error) {
                alert('ошибка при запросе заказа')
                console.error(error)
            }
        })()
        
    }, [])

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои заказы</h1>
            </div>


        <div className="d-flex flex-wrap">
            {(isLoading ? [...Array(8)] : orders).map((item , index) => (
                <Card 
                    key={index}
                    {...item}
                    loading={isLoading}
                />
            ))}
        </div>
        


      </div>
    )
}

export default Orders