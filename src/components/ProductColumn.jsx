import Product from "./Product"
import { ProductData } from "../Context/ProductData"
import { useContext } from "react"

export default function ProductColumn({number}){

    const [data,useData] =useContext(ProductData);
    return (
        <div className="grid grid-cols-1">{data.slice(0,number).map((e)=>(
            <Product data={e}/>
        ))}</div>
    )
}