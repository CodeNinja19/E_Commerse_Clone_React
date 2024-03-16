import IconButton from "@mui/material/IconButton";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { ProductData } from "../Context/ProductData";
import { useContext, useState, useEffect } from "react"
import CloseIcon from '@mui/icons-material/Close';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { motion as m, AnimatePresence, easeIn, easeOut } from "framer-motion"
import {NavLink } from "react-router-dom"


export default function ShoppingCart() {

    const [data, setData] = useContext(ProductData);
    const [cartList, setCartList] = useState(false);
    const getProdQuantity = function () {
        let q = 0;
        for (let e of data) {
            if (e.quantity !== 0) { q++ }

        }
        return q;
    }
    const [prodQuantity, setProdQuantity] = useState(getProdQuantity)
    useEffect(() => {
        setProdQuantity(getProdQuantity());
    }, [data])

    const removeCart = function (id) {

        setData(data.map((e) => {
            if (e.id === id) { return { ...e, quantity: 0 } }
            else { return e }

        }))
    }
    const subTotal=function (){

        let total=0;

        for (let e of data){
            if (e.quantity!==0){ total+=e.quantity*e.price}
        }

        return total;
    }

    return (
        <>
            <div className="relative">
                <IconButton sx={{ color: "#8bc34a" }} aria-label="add to shopping cart" onClick={() => (setCartList(!cartList))}>
                    <ShoppingBasketIcon />
                </IconButton>
                <h1 className="w-4 h-4 rounded-full bg-[#8bc34a] font-bold text-[0.7rem]  text-center absolute top-0 right-0 -translate-y-1 translate-x-0">{prodQuantity}</h1>
            </div>
            <AnimatePresence>
                
                {cartList &&
                    <m.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ duration: 0.6, ease: easeOut }}
                        className="fixed w-[80%] md:w-[40%] overflow-auto overflow-y-auto overflow-x-hidden h-screen bg-white z-20 top-0 right-0">
                        <div className="w-full h-16 flex justify-between items-center border-b border-slate-200">
                            <h1 className="text-xl ml-4">Shopping Cart</h1>
                            <h1 className=""><IconButton onClick={() => (setCartList(!cartList))}>
                                <CloseIcon />
                            </IconButton>
                            </h1>
                        </div>
                        
                            
                                <div className="h-[74%] flex flex-col overflow-auto overflow-y-auto overflow-x-hidden">
                                <AnimatePresence>
                            {data.filter((e) => (e.quantity !== 0)).map((e) => (
                                <m.div
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: "0%", opacity: 1 }}
                                    exit={{ x: "100%", opacity: 0 }}
                                    key={e.id}
                                    transition={{ duration: 1, ease: easeOut }}
                                    className="flex items-center justify-between border-b py-2 border-slate-200">
                                    <div className="flex items-center px-4 space-x-7">
                                        <img src={e.img} alt="product" className="w-20 aspect-square" />
                                        <div className="flex flex-col items-start justify-center">
                                            <h1 className="text-3xl">{e.productName}</h1>
                                            <h1 className="text-2xl"> {e.quantity} X ${e.price}.00</h1>
                                        </div>
                                    </div>
                                    <h1 className="text-slate-500 mr-2 hover:text-slate-800" onClick={() => (removeCart(e.id))}><CancelOutlinedIcon /></h1>
                                </m.div>
                                
                            ))}
                            </AnimatePresence>
                            </div>
                            <div className="w-full px-4 flex justify-between items-center border-t border-b border-slate-200 h-10">
                                <h1>Sub Total:</h1>
                                <h1>${subTotal()}.00</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2 py-2">
                            <NavLink to="/" className={'w-full'} onClick={() => (setCartList(!cartList))}><button className="ml-8 bg-[#6a9739] hover:opacity-75 duration-500 w-[90%] h-fit py-2 text-center text-white text-md font-semibold rounded">View Cart</button></NavLink>
                         <NavLink to="/Everything" className={'w-full'} onClick={() => (setCartList(!cartList))}><button className="ml-8 bg-[#6a9739] hover:opacity-75 duration-500 w-[90%] h-fit py-2 text-center text-white text-md font-semibold rounded">Continue Shopping</button></NavLink>
                            </div>
                        

                    </m.div>
                }
                
            </AnimatePresence>
            {cartList &&
            <div className="w-screen h-screen z-10 bg-black opacity-15 fixed top-0 right-0"></div>
            }

        </>
    )
}