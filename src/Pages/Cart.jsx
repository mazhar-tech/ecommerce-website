import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ADD, DLT } from "../redux/actions/action";
import "../Style/cartDesign.css";
const Cart = () => {

    const location = useLocation();
    const cartItems = useSelector((state) => state.cartreducer.carts);
    const dispatch = useDispatch();
    const product = location.state.product;
  
    const [cartitem, setcartitem] = useState(cartItems.find((item) => item.id === product.id))
    const [quantity, setQuantity] = useState(cartitem?.qnty || '');
    const [selectedSize, setSelectedSize] = useState(cartitem?.size || '');
    const [selectedColor, setSelectedColor] = useState(cartitem?.color || '');

    useEffect(() => {
        setQuantity(cartitem?.qnty || "")
        setSelectedSize(cartitem?.size || "")
        setSelectedColor(cartitem?.color || "")
    }, [cartitem, product])

    console.log("cartitem")
    console.log(cartitem)

    const sizes = ["M", "L"];

    const send = (e) => {
        dispatch(ADD(e));
        toast.success("Add Item Successfully", {
            position: toast.POSITION.TOP_CENTER,
        });
    };
    const dlt = (id) => {
        dispatch(DLT(id));
        toast.error("Remove Item Successfully", {
            position: toast.POSITION.TOP_CENTER,
        });
    };
    return (
        <>
            <hr style={{ margin: "0px" }} />
            <div className="container ">
                <Link className="nav-link active my-3" to="/">
                    Home /{""}
                </Link>
                <>
                    <div className="row">
                        <div className="col-lg-6 ">
                            <img
                                className="img-fluid"
                                src={product.img}
                                alt=""
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    backgroundColor: "#f9f9f9",
                                }}
                            />
                        </div>
                        <div className="col-lg-6 ">
                            <div className="mx-2">
                                <h2>{product.title}</h2>
                                <h4 className="mt-3 mb-3">${product.price}</h4>
                                <h6 className="mb-3">Sku: {product.sku}</h6>
                            </div>
                            <ul>
                                <li>
                                    <b>Color:</b> {product.color}
                                </li>
                                <li>
                                    <b>Brand:</b> Nike
                                </li>
                            </ul>
                            <input
                                className="form-control mx-2"
                                type="number"
                                name=""
                                id=""
                                value={quantity}
                                placeholder="Qty "
                                min={1}
                                style={{
                                    width: "6rem",
                                    height: "3.5rem",
                                    border: "1px solid #9E9FA5",
                                }}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                            />
                            <div className="center-on-mobile">
                                {cartItems.findIndex((item) => item.id === product.id) !== -1 ? (
                                    <button
                                        className="mx-2 my-2 button-hover"
                                        variant="danger"
                                        onClick={() => dlt(product.id)}
                                    >
                                        REMOVE FROM CART
                                    </button>
                                ) : (
                                    <button
                                        className="mx-2 my-2 button-hover"
                                        disabled={!selectedSize || !selectedColor || quantity < 1} // Disable the button if size, color, or quantity is not selected
                                        onClick={() => send(product)}
                                    >
                                        ADD TO CART
                                    </button>
                                )}


                            </div>
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                {sizes.map((item) => (
                                    <label
                                        key={item}
                                        className={`btn btn-outline-success mx-2 rounded-0 ${item === selectedSize ? "active" : ""
                                            }`}
                                        style={{ width: "3rem", height: "2.5rem" }}
                                    >
                                        <input
                                            type="radio"
                                            className="btn-check"
                                            name="sizeRadio"
                                            autoComplete="off"
                                            checked={item === selectedSize}
                                            onChange={() => setSelectedSize(item)} // Call the function on selection change
                                        />
                                        {item}
                                    </label>
                                ))}
                            </div>
                            <div className="btn-toolbar justify-content-between my-2 mx-2" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group" role="group" aria-label="Color group">
                                    {["White", "Green", "Black"].map((color) => (
                                        <button
                                            key={color}
                                            type="radio"
                                            autoComplete="off"
                                            className={`btn btn-outline-success rounded-0 mx-1 ${color === selectedColor ? "active" : ""}`}
                                            onClick={() => setSelectedColor(color)}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>

                <div className="mx-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum feugiat mi eget elit elementum, id pulvinar tellus
                    eleifend. Integer porttitor elit id euismod elementum. Nulla vel
                    molestie massa, eget iaculis elit. Quisque a tortor vel lectus
                    ultricies pretium quis non purus. Pellentesque molestie leo eget
                    rutrum tristique.
                </div>
            </div >
        </>
    );
};

export default Cart;
