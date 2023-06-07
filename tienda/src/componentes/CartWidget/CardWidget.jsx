import React from 'react'
import "./CardWidget.css"

const CardWidget = () => {

    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="carrito" />
            <strong>10</strong>
        </div>
    )
}

export default CardWidget
