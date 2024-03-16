import { ProductOfInterest } from "../Context/ProductOfInterest";
import { ProductData } from "../Context/ProductData";
import {useContext,useState,useEffect} from "react"
import ProductList from "./ProductList";
import Product from './Product'

export default function ProductPurchase(){

    const [purchase,setPurchase] =useContext(ProductOfInterest);
    const [data,setData]=useContext(ProductData);
    const [random,setRandom]=useState([data[0]]);
    const getRandomThree=function (){
        
        let i=0;
        let New=[];
        let used=[];

        while (i<3){
            let rand=Math.floor(Math.random()*12);

            if (data[rand].id!==purchase.id){
                let unique=true;
                for (let j of used){

                    if (j===rand){ unique=false }
                }
                if (unique){
                    New.push(data[rand]);
                    used.push(rand)
                    i++;
                }
                
            }
        }
        setRandom(New);
    }

    useEffect(getRandomThree,[purchase]);

    return (
        <div className="bg-[#f8f6f3]">
        <ProductList data={random}/>
        
        </div>
    )

}