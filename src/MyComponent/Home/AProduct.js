import React from "react";

export default function AProduct(props) {

    return (
        <div className="product__card">
            <div className="product__description">
                <h2 className="product__heading">{props.name}</h2>
                <span className="product__price">${props.amount}</span>
                <span className="product__rating">{props.rating}</span>
            </div>
            <img
                src={props.link}
                alt={props.alt}
                className="product__image"
            />
            <button className="product__button">Add to Cart</button>
        </div>
    );
}
