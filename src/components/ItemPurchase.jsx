import { ProductOfInterest } from "../Context/ProductOfInterest";
import { ProductData } from "../Context/ProductData";
import { useContext, useState, useEffect } from "react"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {NavLink} from "react-router-dom"

export default function ItemPurchase() {

    const [purchase, setPurchase] = useContext(ProductOfInterest);
    const [prodQuantity,setProdQuantity]=useState(1);
    const [data,setData]=useContext(ProductData);

    useEffect(()=>{
        setProdQuantity(purchase.quantity)
    },[purchase])

    useEffect(()=>{
        for (let e of data){
            if (e.id===purchase.id){
                setPurchase(e);
            }
        }
    },[data])

    const changeQuantity=function(){
        if (prodQuantity==="") {setProdQuantity(0);}
        else{
            setPurchase({...purchase,quantity:prodQuantity})
            setData(data.map((e)=>{
                if (e.id===purchase.id){ return  {...e,quantity:prodQuantity}}
                else {return e}
            }))
        }
    }
    const typing =function (e){
        const newValue=e.target.value;
        if (parseInt(newValue)!=NaN && newValue>=0 && newValue<=100) {
            setProdQuantity(newValue);
        }

    }

    return (
        <div className="grid grid-cols-1 pt-6 md:grid-cols-2 md:max-w-[85rem] md:mx-auto">
            <img src={purchase.img} alt="product images" className="w-[92%] mx-auto" />
            <div className="w-[92%] mx-auto mt-5 space-y-2 border-t border-slate-300 md:border-t-0 md:pl-3">
                <h1 className="text-4xl font-bold">{purchase.productName}</h1>
                <h1 className="text-xl font-bold flex">${purchase.price} <h1 className="font-light text-sm translate-y-1 text-slate-600">+Free shipping</h1>
                </h1>
                <p className="text-slate-600">Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit,
                    sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro
                    ame.</p>
                <div className="flex">
                    <div className="flex h-fit border-b border-slate-300 w-full pb-3">
                        <input type="text" value={prodQuantity} className="w-12 text-center" onChange={typing}/>
                        <div className="flex flex-col items-center bg-white">
                        <h1 className="active:bg-slate-200 duration-500"><ArrowDropUpIcon sx={{fontSize:"1.3rem",m:"0"}} onClick={()=>{setProdQuantity(e=>(e+1))}}/></h1>
                        <h1 className="active:bg-slate-200 duration-500"><ArrowDropDownIcon sx={{fontSize:"1.3rem",m:"0"}} onClick={()=>{setProdQuantity(e=>{if(prodQuantity!=0){return e-1} else {return e}})}}/></h1>
                        </div>
                        <button className="ml-8 bg-[#6a9739] hover:opacity-75 duration-500 px-20 h-fit py-2 text-center text-white text-md font-semibold rounded my-auto" onClick={changeQuantity}>Add To Cart</button>
                    </div>
                </div>
                    <div className="flex space-x-2">
                        <h1>Category:</h1>
                        <NavLink to={`/${purchase.category}`} className={({isActive})=>{return isActive?"text-[#6a9739]":"text-slate-500";}}><h1>{purchase.category}</h1></NavLink>
                    </div>
            </div>
        </div>
    )
}