import React from 'react';
import logo from '../images/logo.jpg';
import '../Style/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Link } from 'react-router-dom';
import data from '../utils/data';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
const Header = () => {
    const getdata = useSelector((state) => state.cartreducer.carts);



    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid ">
                    <Link className="navbar-brand col-sm-2 col-xs-2 " to="/"><img src={logo} className='logo mx-5 my-3' alt="" /></Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto" style={{ textDecoration: 'underline' }}>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" state={{ data: data.find((item) => item.btnTitle === "SHOP MEN")?.data || {} }} to="/ProductPage">Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" state={{ data: data.find((item) => item.btnTitle === "SHOP WOMEN")?.data || {} }} to="/ProductPage">Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" state={{ data: data.find((item) => item.btnTitle === "SHOP KIDS")?.data || {} }} to="/ProductPage">Kids</Link>

                            </li>
                        </ul>
                    </div>
                    <form className="d-flex col-sm-3 col-xs-3" role="search">
                        <SearchIcon className="icon-spacing my-2" />
                        <Badge badgeContent={getdata.length} color="secondary" className='badge'>
                            <Link to="/addtocart" className="icon-link">
                                <LocalMallOutlinedIcon className="icon-spacing" />
                            </Link>
                        </Badge>
                        <PersonOutlinedIcon className="icon-spacing my-2" />

                    </form>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

            </nav>

        </>
    )
}

export default Header