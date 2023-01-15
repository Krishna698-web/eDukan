import React from "react";
import AProduct from "./AProduct";

export default function Products() {
    let details = {
        amount: () => { return Math.round(Math.random() * 100 + 1); },
        links: [
            "https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/41lpiu-GMXL._SY445_SX342_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/61kWB+uzR2L._AC_UY218_.jpg",
            "https://m.media-amazon.com/images/I/51QO2wW9g7L._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/51C14VcBgyL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/71S9dis6PRL._SX569_.jpg",
        ],
        alternate_name: 'A product',
        names: [
            "Apple iPhone 13 (128GB) - Blue",
            "MacBook Air Laptop 34.46cm(13.60inch)",
            "boAt Rockerz 370 On Ear Bluetooth Headphones with Upto 12 Hours Playtime",
            "Ecomspace Low-Noise 7238F Propellers for DJI Mavic Air 2S Drone 1 Pair Orange",
            "DJI OSMO Mobile SE Intelligent Gimbal 3-Axis Phone Gimbal Portable and Foldable Android and iPhone",
            " LG Ultragear - 34Gl750-B, 34 Inch (86.6 Cm) LCD 2560 X 1080 Pixels G-Sync Compatible Curved Ultrawide, IPS Gaming Monitor with Height Adjust Stand (Black)"
        ],
        rndCount: Math.round(Math.random() * 5),
        rating: () => {
            let char = "";
            let n = Math.ceil(Math.random() * 5);
            for (let i = 1; i <= n; i++) {
                char += '⭐';
            }
            return char;
        }
    }
    return (
        <div className="products">
            <AProduct amount={details.amount()} link={details.links[0]} alt={details.alternate_name} name={details.names[0]} rating={details.rating()} />
            <AProduct amount={details.amount()} link={details.links[1]} alt={details.alternate_name} name={details.names[1]} rating={details.rating()} />
            <AProduct amount={details.amount()} link={details.links[2]} alt={details.alternate_name} name={details.names[2]} rating={details.rating()} />
            <AProduct amount={details.amount()} link={details.links[3]} alt={details.alternate_name} name={details.names[3]} rating={details.rating()} />
            <AProduct amount={details.amount()} link={details.links[4]} alt={details.alternate_name} name={details.names[4]} rating={details.rating()} />
            <AProduct amount={details.amount()} link={details.links[5]} alt={details.alternate_name} name={details.names[5]} rating={details.rating()} />
            {/* <div className="product__card">
                <div className="product__description">
                    <h2>MacBook Air Laptop 34.46cm(13.60inch)</h2>
                    <span className="product__price">${amount}</span>
                    <span className="product__rating">⭐⭐⭐</span>
                </div>
                <img
                    src="https://m.media-amazon.com/images/I/41lpiu-GMXL._SY445_SX342_QL70_FMwebp_.jpg"
                    alt="product img"
                    className="product__img"
                />
                <button className="product__addition">Add to Cart</button>
            </div>
            <div className="product__card">
                <div className="product__description">
                    <h2>MacBook Air Laptop 34.46cm(13.60inch)</h2>
                    <span className="product__price">${amount}</span>
                    <span className="product__rating">⭐⭐⭐⭐</span>
                </div>
                <img
                    src="https://m.media-amazon.com/images/I/41lpiu-GMXL._SY445_SX342_QL70_FMwebp_.jpg"
                    alt="product img"
                    className="product__img"
                />
                <button className="product__addition">Add to Cart</button>
            </div>
            <div className="product__card">
                <div className="product__description">
                    <h2>
                        boAt Rockerz 370 On Ear Bluetooth Headphones with Upto 12 Hours
                        Playtime
                    </h2>
                    <span className="product__price">${amount}</span>
                    <span className="product__rating">⭐⭐⭐⭐</span>
                </div>
                <img
                    src="https://m.media-amazon.com/images/I/61kWB+uzR2L._AC_UY218_.jpg"
                    alt="product img"
                    className="product__img"
                />
                <button className="product__addition">Add to Cart</button>
            </div>
            <div className="product__card">
                <div className="product__description">
                    <h2>
                        Ecomspace Low-Noise 7238F Propellers for DJI Mavic Air 2S Drone 1
                        Pair Orange
                    </h2>
                    <span className="product__price">${amount}</span>
                    <span className="product__rating">⭐⭐⭐</span>
                </div>
                <img
                    src="https://m.media-amazon.com/images/I/51QO2wW9g7L._AC_UL320_.jpg"
                    alt="product img"
                    className="product__img"
                />
                <button className="product__addition">Add to Cart</button>
            </div>
            <div className="product__card">
                <div className="product__description">
                    <h2>
                        DJI OSMO Mobile SE Intelligent Gimbal 3-Axis Phone Gimbal Portable
                        and Foldable Android and iPhone
                    </h2>
                    <span className="product__price">${amount}</span>
                    <span className="product__rating">⭐⭐⭐⭐</span>
                </div>
                <img
                    src="https://m.media-amazon.com/images/I/51C14VcBgyL._AC_UL320_.jpg"
                    alt="product img"
                    className="product__img"
                />
                <button className="product__addition">Add to Cart</button>
            </div>
            <div className="product__card">
                <div className="product__description">
                    <h2>
                        LG Ultragear - 34Gl750-B, 34 Inch (86.6 Cm) LCD 2560 X 1080 Pixels
                        G-Sync Compatible Curved Ultrawide, IPS Gaming Monitor with Height
                        Adjust Stand (Black)
                    </h2>
                    <span className="product__price">${amount}</span>
                    <span className="product__rating">⭐⭐⭐⭐</span>
                </div>
                <img
                    src="https://m.media-amazon.com/images/I/71S9dis6PRL._SX569_.jpg"
                    alt="product img"
                    className="product__img"
                />
                <button className="product__addition">Add to Cart</button>
            </div> */}
        </div>
    );
}
