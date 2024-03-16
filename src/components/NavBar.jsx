
import logo from "../assets/organic-store-logo5.svg";
import Button from "@mui/material/Button"
import ShoppingCart from "./ShoppingCart";
import IconButton from "@mui/material/IconButton";
import {useContext} from "react"
import MenuIcon from '@mui/icons-material/Menu'
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import { ProductData } from "../Context/ProductData";
import { motion as m, AnimatePresence } from "framer-motion"
import { Router } from "react-router-dom";
import { useState } from "react";
import {NavLink} from "react-router-dom"



export default function NavBar() {

    const [menu, setMenu] = useState(false);
    console.log(menu);

    const [data,setData]=useContext(ProductData);

    const handleClick = () => {

        setMenu(!menu);
    }
    const subTotal=function (){

        let total=0;

        for (let e of data){
            if (e.quantity!==0){ total+=e.quantity*e.price}
        }

        return total;
    }

    return (
        <div className={`flex justify-between p-3 `}>

            <NavLink to="/" className={({isActive})=>{
                return isActive?"text-[#6a9739]":"";
            }}><img src={logo} alt="logo" className="w-36 grow-0" /></NavLink>
            <div className="hidden md:flex md:justify-between md:items-center md:text-md md:grow md:mx-10 md:font-semibold md:text-slate-600">
                <div className="flex space-x-6">
                <NavLink to="/Everything" className={({isActive})=>{
                    return isActive?"text-[#6a9739]":"";
                }}>Everything</NavLink>
                <NavLink to="/Groceries" className={({isActive})=>{
                    return isActive?"text-[#6a9739]":"";
                }}>Groceries</NavLink>
                <NavLink to="/Juices" className={({isActive})=>{
                    return isActive?"text-[#6a9739]":"";
                }}>Juices</NavLink>
                </div>
                <div className="flex space-x-6">
                    <NavLink to="/About" className={({isActive})=>{
                        return isActive?"text-[#6a9739]":"";
                    }}>About</NavLink>
                    <NavLink to="/Contact" className={({isActive})=>{
                        return isActive?"text-[#6a9739]":"";
                    }}>Contact</NavLink>
                </div>
            </div>

            <AnimatePresence>
                {menu &&
                    <m.div
                        key={Router.pathname}
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: "0%" }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-white backdrop-blur flex flex-col items-start fixed z-20 w-[92%] top-0 right-0 shadow-lg md:flex "
                    >

                        <div className="w-full h-16 flex flex-row-reverse"><IconButton onClick={handleClick}><CloseIcon /></IconButton></div>
                        <div className="w-full h-16 flex"><IconButton><PersonIcon sx={{ color: "black" }} /></IconButton></div>
                        <div className="w-full flex flex-col md:flex">
                            <NavLink to="/Everything" className={({isActive})=>{return isActive?"text-[#6a9739]":"";}} onClick={handleClick}><h1 className="w-full h-12 p-3 text-md flex flex-col justify-center border-t border-slate-500">Everything</h1></NavLink>
                            <NavLink to="/Groceries" className={({isActive})=>{return isActive?"text-[#6a9739]":""}} onClick={handleClick}><h1 className="w-full h-12 p-3 text-md flex flex-col justify-center border-t border-slate-500">Grocerises</h1></NavLink>
                            <NavLink to="/Juices" className={({isActive})=>{return isActive?"text-[#6a9739]":""}} onClick={handleClick}><h1 className="w-full h-12 p-3 text-md flex flex-col justify-center border-t border-slate-500">Juice</h1></NavLink>
                        </div>
                        <div className="w-full flex flex-col md:flex">
                            <NavLink to="/About" className={({isActive})=>{return isActive?"text-[#6a9739]":""}} onClick={handleClick}><h1 className="w-full h-12 p-3 text-md flex flex-col justify-center border-t border-slate-500">About</h1></NavLink>
                            <NavLink to="/Contact" className={({isActive})=>{return isActive?"text-[#6a9739]":""}} onClick={handleClick}><h1 className="w-full h-12 p-3 text-mdflex flex-col justify-center border-t border-b border-slate-500">Contact</h1></NavLink>

                        </div>
                    </m.div>
                }
            </AnimatePresence>
            {menu &&
            <div className="w-screen h-screen z-10 bg-black opacity-15 fixed top-0 right-0"></div>
            }

            <div className="flex p-1 w-fit space-x-2 grow-0 items-center" >
                <Button sx={{ color: "#8bc34a" }}>${subTotal()}.00</Button>
                <ShoppingCart/>
                <button className="bg-[#8bc34a] p-1 w-8 h-12 md:hidden" onClick={handleClick} ><MenuIcon sx={{ color: "white" }} /></button>
                <div className="hidden md:inline"><IconButton><PersonIcon sx={{ color: "black" }} /></IconButton></div>


            </div>
        </div>
    )
}