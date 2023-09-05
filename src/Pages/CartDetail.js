import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DLT } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UPDATE_QUANTITY } from "../redux/actions/action";

const CartDetail = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const history = useNavigate();

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
    toast.error("Remove Item Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    const calculateTotal = () => {
      let totalPrice = 0;
      getdata.forEach((item) => {
        totalPrice += item.price * item.qnty;
      });
      setPrice(totalPrice);
    };

    calculateTotal();
  }, [getdata]);

  const updateQuantity = (id, newQuantity) => {
    dispatch(UPDATE_QUANTITY(id, newQuantity));
  };

  // Check if there are no items in the cart
  if (getdata.length === 0) {
    return (
      <div className="container">
        <h2>Your Cart is Empty</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <hr style={{ margin: "0px" }} />
      <div className="container col-sm-12">
        <Link className="nav-link active my-3" to="/">
          Home /{" "}
        </Link>

        <div className="row">
        <hr className="my-2 col-lg-9"  />
          <div className="col-lg-9 d-flex justify-content-between">
              <div className="col-lg-6 p-0">PRODUCT</div>
              <div className="col-lg-2">PRICE</div>
              <div className="col-lg-2 ">QUANTITY</div>
              <div className="col-lg-2 ">TOTAL</div>
            <hr className="my-2" />
          </div>
          <div className="col-lg-3 ">
            <h4>Order summary</h4>
          </div>
          <div className="col-lg-9">
            {getdata.map((item) => (
              <div className="row" key={item.id}>
                <div className="col-lg-6 d-flex justify-content-between my-2 p-0">
                  <img src={item.img} alt="" style={{ width: "6rem" }} />
                  <div className="col-lg-9 mx-2">
                    <h6>{item.title}</h6>
                    <p className="my-0"><b>Color:</b> {item.color}</p>
                    <p className="my-0"><b>Size:</b> {item.size}</p>
                    <div className="mt-05">
                      <a
                        href="#"
                        className="text-textSubdued underline"
                        onClick={() => dlt(item.id)}
                      >
                        <span>Remove</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 my-5">${item.price}</div>
                <div className="col-lg-2 my-5">
                  <input
                    className="form-control"
                    type="number"
                    min={1}
                    style={{
                      width: "5rem",
                      height: "2rem",
                      border: "1px solid #9E9FA5",
                    }}
                    value={item.qnty}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                  />
                </div>
                <div className="col-lg-2 my-5 d-flex justify-content-end">
                  ${item.price * item.qnty}
                </div>
              </div>
            ))}
            <hr className="my-2" />
          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-8">
                <p>Subtotal</p>
              </div>
              <div className="col-lg-4">
                <p>${price}</p>
              </div>
            </div>
            <div>
              <p>
                <i>Taxes and shipping calculated at checkout</i>
              </p>
            </div>
            <button className="btn btn-dark my-3">CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetail;
