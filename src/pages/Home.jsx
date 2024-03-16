import organicHero from "../assets/organic-products-hero.png";

import leafPng from "../assets/logo-leaf.png";
import React from 'react'
import ProductList from "../components/ProductList.jsx"

import Lemon from "../assets/lemon-item.jpg"
import Lettuce from "../assets/lettuce-item.png"
import Legume from "../assets/legume-item.jpg"
import MilaKunis from "../assets/review-profilePick-1.png"
import ShopNowList from '../components/ShopNowList.jsx';
import CustomerReview from '../components/CustomerReview.jsx'
import MikeSendler from "../assets/review-profilePick-2.png"
import {useState,useContext} from "react"
import { ProductData } from "../Context/ProductData.jsx";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import RecyclingIcon from '@mui/icons-material/Recycling';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";



export default function Home() {

    const [data,setData]=useContext(ProductData);
    const image_list = data.slice(0,4);

    const shopItems=[
        {heading:"Freah Lemons",description:"Please buy these lemons they are fresh from the farm",item_image:Lemon},
        {heading:"Freah Lemons",description:"Please buy these lemons they are fresh from the farm",item_image:Lettuce},
        {heading:"Freah Lemons",description:"Please buy these lemons they are fresh from the farm",item_image:Legume}
      ]

    const trendingProducts=data.slice(1,5);

    const review1={
        rating:3,
        message:"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        profilePick:MilaKunis,
        customerName:"Mila Kunis"
      }

    const review2={
        rating:4,
        message:"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        profilePick:MikeSendler,
        customerName:"Mike Sendler"
      }


    return (
        <>
            
            <div className="bg-[#fbfbf9] lg:flex lg:flex-row-reverse">
                <div className="w-screen aspect-video flex flex-col items-center justify-center space-y-4">
                    <h1 className="text-xl">Best Quality Product</h1>
                    <h1 className="text-4xl text-center">Join the orgain movement</h1>
                    <p className="text-center w-4/5 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore esse ullam voluptatum aliquid.
                        Exercitationem.</p>
                    <NavLink to="/Everything"><button className="bg-[#6a9739] py-3 px-7 rounded-lg text-white text-lg font-semibold hover:opacity-75"><ShoppingCartIcon/>&nbsp;Shop Now</button></NavLink>
                </div>
                <div className="w-screen aspect-video pt-8 lg:pt-0">
                    <img className="m-auto" src={organicHero}/>
                </div>
            </div>
            <div className="bg-black flex flex-wrap text-white text-lg font-semibold font-sans">
                <div className="bg-[#303030] mx-7 my-4 grow w-screen  h-32 rounded-sm flex flex-col justify-center pl-4 sm:w-48 ">
                    <h1><LocalShippingIcon sx={{color:"#6a9739"}}/></h1>
                    <h1>Free Shipping</h1>
                    <h2>Above $5 Only</h2>
                </div>
                <div className="bg-[#303030] mx-7 my-4 grow w-screen text-white h-32 rounded-sm flex flex-col justify-center pl-4 sm:w-48 ">
                <PermContactCalendarIcon sx={{color:"#6a9739"}}/>
                    <h1>Certified Organic</h1>
                    <h2>100% Guarantee</h2>
                </div>
                <div className="bg-[#303030] mx-7 my-4 grow w-screen text-white h-32 rounded-sm flex flex-col justify-center pl-4 sm:w-48 ">
                <LocalAtmIcon sx={{color:"#6a9739"}}/>
                    <h1>Huge Savings</h1>
                    <h2>At Lowest Price</h2>
                </div>
                <div className="bg-[#303030] mx-7 my-4 grow w-screen text-white h-32 rounded-sm flex flex-col justify-center pl-4 sm:w-48 ">
                <RecyclingIcon sx={{color:"#6a9739"}}/>
                    <h1>Easy Returns</h1>
                    <h2>No Questions Asked</h2>
                </div>
            </div>
            <div className="flex flex-col items-center mt-5 lg:mt-20">
                <h1 className="text-4xl text-center">Best Selling Products</h1>
                <img src={leafPng} alt="image of a leaf" className="my-6 w-28 md:w-16"/>
            </div>
            <ProductList data={image_list}/> 
            <ShopNowList shopItems={shopItems} />
            <div className="bg-black items-center px-5 h-fit py-3 flex flex-col md:flex-row md:justify-between ">
                <p className="text-white text-3xl mt-5 md:mt-0 text-center">Get 25% Off On Your First Purchase!</p>
                <NavLink to="/Everything" onClick={()=>(window.scrollTo(0,0))}><button className="bg-[#6a9739] py-3 px-7 rounded-lg text-white text-lg font-semibold hover:opacity-75"><ShoppingCartIcon/>&nbsp;Shop Now</button></NavLink>
            </div>
            <div className="bg-[#f8f6f3] flex justify-center items-center h-fit">
                <p className="text-3xl font-semibold text-center py-3">Try it for free. No registration needed. </p>
            </div>
            <div className="flex flex-col items-center mt-5 lg:mt-20">
                <h1 className="text-4xl text-center">Trending Products</h1>
                <img src={leafPng} alt="image of a leaf" className="my-6 w-28 md:w-16"/>
            </div>
            <ProductList data={trendingProducts}/>
            <div className="flex flex-col items-center mt-5 lg:mt-20">
                <h1 className="text-4xl text-center">Customer Reviews</h1>
                <img src={leafPng} alt="image of a leaf" className="my-6 w-28 md:w-16"/>
            </div>
            <div className="flex flex-col space-y-11 lg:space-y-0 lg:flex-row lg:justify-between lg:items-end px-5 w-[96%] mx-auto">
                <div id="customerReview1" className="lg:w-96"><CustomerReview review={review1}/></div>
                <div className="border relative rounded-lg shadow-md flex flex-col justify-around py-10 px-10 grow items-center lg:w-96 mx-4 h-[32rem] bg-[url('/src/assets/vegetable_background.jpg')] bg-cover">
                    <div className="w-full h-full z-10 rounded-lg bg-black opacity-40 hover:opacity-75 duration-500 absolute"></div>
                    <p className="text-4xl text-center text-white font-bold z-20">Deal Of The Day 15% Off On All Vegetables!</p>
                    <p className="text-xl font-semibold text-center text-white z-20">I am text block. Click edit button to change this tex em ips.</p>
                    <button className="z-20 text-white bg-[#6a9739] px-10 h-14 rounded-lg text-lg font-semibold mb-2 ml-2 hover:opacity-95">
                        Shop Now &#8594;
                    </button>
                </div>
                <div id="customerReview2" className="lg:w-96"><CustomerReview review={review2}/></div>
            </div>
            
        </>
    )
}