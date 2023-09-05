//Product use for the KIDS SHOP MAN SHOP WOMEN SHOP whne click on the button then navigate on product page 


import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Style/Product.css';
import data from '../utils/data';
const Product = () => {
  const cardStyle = {
    width: '100%',
   
  };
  const navigate = useNavigate();

  return (
    <div className="container mt-3">
      <div className="row">
        {data.map(item => (
          <div key={item.id} className="col-md-4 col-sm-6 mb-4">
            <div style={cardStyle} className="card no-border-card">
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="card-body p-0">
                <h5 className="card-title my-3">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a
                  onClick={() => {
                    navigate('/ProductPage', { state: { data: item.data } });
                  }}
                  className="btn btn-dark card-button"
                >
                  {item.btnTitle}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
