import React from "react";
import first from "../images/first.png";
import second from "../images/second.png";
import third from "../images/third.png";
import four from "../images/four.png";
import "../Style/FeatureProduct.css";
import { Link, useNavigate } from 'react-router-dom';


const FeatureProduct = () => {
    const data = [
        {
            id: 1,
            img: first,
            title: "Nike air zoom pegasus 35",
            price: 411.0,
            sku:"N1pb43ntr-blue",
            color:'blue'
        },
        {
            id: 2,
            img: second,
            title: "Mix and match chuck taylor all star",
            price: 798.0,
            sku:"B1pb783ntr-black",
            color:'black'
        },
        {
            id: 3,
            img: third,
            title: "Geography class chuck taylor all star",
            price: 250.0,
            sku:"R58ifnd32-black",
            color:'red'


        },
        {
            id: 4,
            img: four,
            title: "Swift run x shoes",
            price: 337.0,
            sku:"R58ifnd32-red",
            color:'yello'
        },
    ];

    const navigate = useNavigate();

    const handleTitleClick = (id) => {
        navigate(`/cart/${id}`, { state: { product: data.find(item => item.id === id) } });
    };
    

    return (
        <div className="container">
            <div className="row">
                {data.map((item) => (
                    <div key={item.id} className="col-md-3 col-sm-6 col-xs-6 mb-4">
                        <div className="card border-0">
                            <div className="bg-light" style={{ padding: "10px" }}>
                                <img
                                    className="card-img-top img-fluid"
                                    src={item.img}
                                    alt="Product"
                                    style={{
                                        backgroundColor: "#f9f9f9",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleTitleClick(item.id)}
                                />
                            </div>
                            <div className="card-body">
                                <h6
                                    className="card-title"
                                    onClick={() => handleTitleClick(item.id)}
                                >
                                    {item.title}
                                </h6>
                                <p className="card-text">Price: ${item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureProduct;
