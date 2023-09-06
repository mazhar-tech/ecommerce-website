import React, { useState } from 'react';
import '../Style/FeatureProduct.css';
import { useLocation, useNavigate, Link } from 'react-router-dom';


const FeatureProduct = ({data}) => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(null);


  const handleTitleClick = (id) => {
    navigate(`/cart/${id}`, {
      state: {
        product: data.find((item) => item.id === id),
        selectedColor,
      },
    });
  };
  return (
    <div className="container">
      <div className="row">
        {data.map(item => (
          <div key={item.id} className="col-md-4 col-sm-6 col-xs-6 p-1">
            <div className="card border-0">
              <div className="bg-light" style={{ padding: '10px' }}>
                <img
                  className="card-img-top img-fluid"
                  src={item.img}
                  alt="Product"
                  style={{ backgroundColor: '#f9f9f9', borderRadius: '10px', cursor: 'pointer' }}
                  onClick={() => handleTitleClick(item.id)}
                />
              </div>
              <div className="card-body">
                <h6 className="card-title " onClick={() => handleTitleClick(item.id)}>
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