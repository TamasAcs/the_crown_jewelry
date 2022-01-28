import React from 'react'
import "./ItemList.css"

function ItemList({menuItem}) {
    return (
        <div className="item">
            {
                menuItem.map((item) =>{
                    return <div className="item_container" key={item.id}>
                            <img src={item.image} alt=""/>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                    </div>
                })
            }
        </div>
    )
}

export default ItemList;
