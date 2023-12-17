import React from "react";
import data from "../../data/data.json"

function Sidebar({handleSetCategory, handleSetCategoryStatus, handleSetColor, handleSetColorStatus, handleSetPrice, handleSetPriceStatus}) {
    return (
        <div className="col-md-2">
        <h4>Category</h4>
        <ul className="list fw-lighter font-monospace">
            <li className="list-group-item">
                <input type="radio"
                    name="category" id=""
                    value={"all"}
                    defaultChecked="true"
                    onChange={(e) => {
                        handleSetCategoryStatus(false)
                        handleSetCategory(e.target.value)
                    }}
                /> All
            </li>
            {
                data.categories.map((item) => {
                    return (
                        <li className="list-group-item" key={item.id}>
                            <input type="radio"
                                name="category" id=""
                                value={item.title}
                                onChange={(e) => {
                                    handleSetCategoryStatus(true)
                                    handleSetCategory(e.target.value)
                                }}
                            /> {item.title}
                        </li>
                    )
                })
            }
        </ul>
        <h4>Price</h4>
        <ul className="list fw-lighter font-monospace">
            <li className="list-group-item">
                <input type="radio"
                    name="price" id=""
                    value={"all"}
                    onChange={(e) => {
                        handleSetPriceStatus(false)
                        handleSetPrice(e.target.value)
                    }}
                /> All
            </li>
            {
                data.prices.map((item) => {
                    return (
                        <li className="list-group-item" key={item.id}>
                            <input type="radio"
                                name="price" id=""
                                value={item.min}
                                onChange={(e) => {
                                    handleSetPriceStatus(true)
                                    handleSetPrice(e.target.value)
                                }}
                            /> {item.min >= 150 ? `Over $${item.min}` : `$${item.min}-$${item.max}`}
                        </li>
                    )
                })
            }
        </ul>
        <h4>Colors</h4>
        <ul className="list fw-lighter font-monospace">
            <li className="list-group-item">
                <input className='form-check-input'
                    style={{ backgroundImage: 'linear-gradient(to right, red, green)' }}
                    type="radio"
                    name="color" id=""
                    value={'all'}
                    onChange={(e) => {
                        handleSetColorStatus(false)
                        handleSetColor(e.target.value)
                    }}
                /> All
            </li>
            {
                data.colors.map((item) => {
                    return (
                        <li className="list-group-item" key={item.id}>
                            <input className='form-check-input'
                                style={{ backgroundColor: `${item.color}` }}
                                type="radio"
                                name="color" id=""
                                value={item.color}
                                onChange={(e) => {
                                    handleSetColorStatus(true)
                                    handleSetColor(e.target.value)
                                }}
                            /> {item.color}
                        </li>
                    )
                })
            }
        </ul>
    </div>
    )
}

export default Sidebar