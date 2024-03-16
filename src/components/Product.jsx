import Rating from "@mui/material/Rating"
import { ProductOfInterest } from "../Context/ProductOfInterest"
import {useContext} from "react"
import {NavLink} from "react-router-dom"
import scrollTop from "../Hooks/scrollTop";

export default function Product({data}){

    const [purchase,setPurchase]=useContext(ProductOfInterest);

    const renderProduct=function (){
        setPurchase(data);
    }

    return (
        <div className="flex flex-col items-center mx-4 my-4">
            <NavLink to="/Purchases" onClick={scrollTop}><img src={data.img} alt="product image" className="pb-5" onClick={renderProduct}/></NavLink>
            <h1 className="text-md text-slate-700 font-light">{data.category}</h1>
            <h1 className="text-xl font-semibold">{data.productName}</h1>
            <Rating name="read-only" value={data.rating} readOnly />
            <h1 className="font-bold">${data.price}</h1>
        </div>
    )

}