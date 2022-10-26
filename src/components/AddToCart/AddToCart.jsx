import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AddToCart = () => {
    const cart = useLoaderData()
    console.log(cart);
    return (
        <div>
            
        </div>
    );
};

export default AddToCart;