import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import styled from "styled-components"
import { mobileL } from "../../responsive.js"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './FirstBar.css'


const SearchBar = styled.div`
 
  ${mobileL({ display: "none " })}
 
  `
const FirstNavbar = ({ loginData, logout }) => {
    const quantity = useSelector(state => state.cart.quantity)

    return (
        <div>
            <section className="firstbar align-middle">
                <nav className=" navbar navbar-expand-lg text-white first-navbar  ">
                    <div className="container-fluid align-middle text-white">
                        <a className="navbar-brand text-white" href="/">
                            KIWI' store
                            {/*                             <img className=" logo img-fluid " src="././client/public/kiwi_logos.png" alt="" />
 */}                        </a>
                    </div>
                    <div className=" d-flex align-middle main-locaion ">
                        <div className="loc-icon   ">
                            <i className="fa-solid fa-location-dot" />
                        </div>
                        <div className="location   ">
                            <h6>Deliver to</h6>
                            <h4>palestinian terri...</h4>
                        </div>
                    </div>
                    <SearchBar className="input-group d-flex ">
                        <span className=" btn btn-outline-secondary  cata-list" type="button">
                            <li className="nav-item dropdown   " type="button">
                                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All
                                </a>
                                <ul className="dropdown-menu text-white list-g-search">
                                    <li><a className="dropdown-item" href="#">All Deparments</a></li>
                                    <li><a className="dropdown-item" href="#">Arts &amp; craft</a></li>
                                    <li><a className="dropdown-item" href="#">Automotive</a></li>
                                    <li><a href="#" className="dropdown-item">Baby</a></li>
                                    <li><a href="#" className="dropdown-item">Beauty &amp; Personal Care</a></li>
                                    <li><a href="#" className="dropdown-item">Books</a></li>
                                    <li><a href="#" className="dropdown-item">Boys' Fashion</a></li>
                                    <li><a href="#" className="dropdown-item">Computers</a></li>
                                    <li><a href="#" className="dropdown-item">Deals</a></li>
                                    <li><a href="#" className="dropdown-item">Digital Music</a></li>
                                    <li><a href="#" className="dropdown-item">Electronics</a></li>
                                    <li><a href="#" className="dropdown-item">Girls' Fashion</a></li>
                                    <li><a href="#" className="dropdown-item">Health &amp; Household</a></li>
                                    <li><a href="#" className="dropdown-item">Home &amp; Kitchen</a></li>
                                    <li><a href="#" className="dropdown-item">Industrial &amp; Scientific</a></li>
                                    <li><a href="#" className="dropdown-item">Kindle Store</a></li>
                                    <li><a href="#" className="dropdown-item">Luggage</a></li>
                                    <li><a href="#" className="dropdown-item">Men's Fashion</a></li>
                                    <li><a href="#" className="dropdown-item">Movies &amp; TV</a></li>
                                    <li><a href="#" className="dropdown-item">Music, CDs &amp; Vinyl</a></li>
                                    <li><a href="#" className="dropdown-item">Pet Supplies</a></li>
                                    <li><a href="#" className="dropdown-item">Prime Video</a></li>
                                    <li><a href="#" className="dropdown-item">Software</a></li>
                                    <li><a href="#" className="dropdown-item">Sports &amp; Outdoors</a></li>
                                    <li><a href="#" className="dropdown-item">Tools &amp; Home Improvement</a></li>
                                    <li><a href="#" className="dropdown-item">Toys &amp; Games</a></li>
                                    <li><a href="#" className="dropdown-item">Video Games</a></li>
                                    <li><a href="#" className="dropdown-item">Women's Fashion</a></li>
                                </ul>
                            </li>
                        </span>
                        <input type="text" className="form-control " placeholder="username" aria-label="Recipient's username with two button addons" />
                        <span className="search-icon btn btn-outline-secondary   " type="button"><SearchIcon /></span>
                    </SearchBar>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className=" ul-nav navbar-nav me-auto mb-2 mb-lg-0 ">
                            {/* <li className="nav-item text-white languagesel">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span> <img src="img/americ.png" alt /></span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <p>Change language <a href="#">Learn more</a></p>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    English - EN
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    español - ES
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    العربية - AR
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Deutsch - DE
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    עִברִית - HE
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    한국인 - KO
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Português - PT
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    中國 - ZH
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    中國人 - ZH
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <p>Change currency <a href="#">learn more</a></p>
                                            <p> $ - USD - US Dollar <span><a href="#">Change</a></span></p>
                                            <p><span /> You are shopping on Amazon.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}
                            <li className="nav-item dropdown align-middle mt-3">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="location    ">
                                        <h6 className="Accountsh6">Hello, sign in</h6>
                                        <h4>Accounts &amp; Lists</h4>
                                    </span>
                                </a>
                                <ul className="dropdown-menu text-white">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item align-middle mt-3">
                                <span className="location btn   ">
                                    <h6 className="Accountsh6">Returns</h6>
                                    <h4> &amp; Orders</h4>
                                </span>
                            </li>
                            <li className=" nav-item Badge_li  main-locaion  me-4   mt-4" >
                                <Link to="/cart">
                                    <Badge badgeContent={quantity} className=" Badge  ">
                                        <ShoppingCartOutlined color="white" />
                                    </Badge>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>

        </div>
    )
}

export default FirstNavbar