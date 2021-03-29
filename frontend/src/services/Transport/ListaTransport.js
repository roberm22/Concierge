import React, { useState, useEffect } from 'react';
import './listaitem.css';
import {NavLink} from "react-router-dom";

export const ListaTransport = () => {
    // HINT: each "item" in our list names a name,
    // a boolean to tell if its been completed, and a quantity
    const [items, setItems] = useState([
        { itemName: 'item1', quantity: 1, isSelected: false },
        { itemName: 'item1', quantity: 3, isSelected: true },
        { itemName: 'item1', quantity: 2, isSelected: false },
        { itemName: 'item1', quantity: 1, isSelected: false },
        { itemName: 'item1', quantity: 1, isSelected: false },
    ]);

    const [inputValue, setInputValue] = useState('');
    const [totalItemCount, setTotalItemCount] = useState(6);

    const handleAddButtonClick = () => {
        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        };

        const newItems = [...items, newItem];

        setItems(newItems);
        setInputValue('');
        calculateTotal();
    };

    const handleQuantityIncrease = (index) => {
        const newItems = [...items];

        newItems[index].quantity++;

        setItems(newItems);
        calculateTotal();
    };

    const handleQuantityDecrease = (index) => {
        const newItems = [...items];

        newItems[index].quantity--;

        setItems(newItems);
        calculateTotal();
    };

    const toggleComplete = (index) => {
        const newItems = [...items];

        newItems[index].isSelected = !newItems[index].isSelected;

        setItems(newItems);
    };

    const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity;
        }, 0);

        setTotalItemCount(totalItemCount);
    };

    return (
        <div>


                <div>
                 Choose or write what you want:


                    <div className='main-container'>

                        <div className='add-item-box'>
                            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
                            <button  onClick={() => handleAddButtonClick()} >
                                Add
                            </button>
                        </div>
                        <div className='item-list'>

                            {items.map((item, index) => (
                                <div className='item-container'>
                                    <div className='item-name' onClick={() => toggleComplete(index)}>
                                        {item.isSelected ? (
                                            <>

                                                <span className='completed'>{item.itemName}</span>
                                            </>
                                        ) : (
                                            <>

                                                <span>{item.itemName}</span>
                                            </>
                                        )}
                                    </div>
                                    <div className='quantity'>
                                        <button  onClick={() => handleQuantityDecrease(index)} >

                                            -

                                        </button>
                                        <span> {item.quantity} </span>
                                        <button onClick={() => handleQuantityIncrease(index)}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='total'>Total: {totalItemCount}</div>
                    </div>


                </div>

            </div>


    );
};

export default ListaTransport;
