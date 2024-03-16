import { useContext } from "react"
import { useState } from "react";
import { ProductData } from "../Context/ProductData"
import { useEffect } from "react";
import ProductBox from "../components/ProductBox";
import { DisplayProductData } from "../Context/DisplayProductData";
import { className } from "postcss-selector-parser";
import {SearchType} from "../Context/SearchType"
export default function ProductDisplay(){
    const [action,setAction]=useContext(SearchType);
     const [data,setData]=useContext(DisplayProductData);
     const [curr,setCurr]=useState(0);
     useEffect(()=>{
        setData(data => data.filter((e)=> e.display))
     },[])
    const [boxNumber,setBoxNumber]=useState(Array(Math.ceil(data.length/9)).fill(false));
    useEffect(()=>{
        setBoxNumber([true,...boxNumber.slice(1)])
    },[])

    useEffect(()=>{
        setCurr((boxNumber.findIndex((e)=> e===true)));
    },[boxNumber])
    useEffect(()=>{
        const newbox=Array(Math.ceil(data.length/9)).fill(false);
        console.log(newbox)
        if (newbox.length!==0) {newbox[0]=true;}
        setBoxNumber(newbox);
},[data])
    function changeDisplay(ind){

        setBoxNumber(boxNumber.map((e,i)=>{
            if (i==ind) { return true}
            else { return false}
        }))

    }
    return (
        <div className="bg-[#f8f6f3]">
            <div className="flex flex-col items-center justify-between px-6 h-16 pt-3 md:flex-row md:items-start">
                {boxNumber.length!==0 && <h1 className="text-lg">Showing {curr*9+1}-{curr===boxNumber.length-1?data.length:curr*9+9} from {data.length} results</h1>}
                {boxNumber.length===0 && <h1 className="text-lg">No result found</h1>}
                <select className="h-8 text-center" onChange={(e)=>{setAction((i)=>({...i,type:e.target.value}));setData("a")}}>
                <option value="default">Default</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by rating</option>
                    <option value="latest">Sort by latest</option>
                    <option value="priceLow">Sort by price:low to high</option>
                    <option value="priceHigh">Sort by price:high to low</option>
                </select>
            </div>

            {boxNumber.map((e,i)=>{
                if(e){
                    if (i==boxNumber.length-1){
                        return <ProductBox data={data.slice(i*9)}/>  //in case last box is not completely filled
                    }
                else{
                    return <ProductBox data={data.slice(i*9,i*9+9)}/>
                }
                }
                else {return null}
            })}
            <div className="mt-5 flex space-x-3 px-3">
                {curr!=0 && boxNumber.length!==0 && <button className="px-4 py-2 border border-[#8bc34a]   text-[#8bc34a] hover:text-white focus:text-white hover:bg-[#8bc34a] focus:bg-[#8bc34a] duration-500" onClick={()=>(changeDisplay(curr-1))}>&#8592;</button>}
                {boxNumber.map((e,i)=>{

                    return <button onClick={()=>(changeDisplay(i))} className={`px-4 py-2 border border-[#8bc34a]   hover:text-white focus:text-white hover:bg-[#8bc34a] focus:bg-[#8bc34a] duration-500 ${curr===i?"bg-[#8bc34a] text-white":"text-[#8bc34a]"}`}>{i+1}</button>
                })}
                {curr!=boxNumber.length-1 && <button className="px-4 py-2 border border-[#8bc34a]   text-[#8bc34a] hover:text-white focus:text-white hover:bg-[#8bc34a] focus:bg-[#8bc34a] duration-500" onClick={()=>(changeDisplay(curr+1))}>&#8594;</button>}
            </div>
        </div>
    )
}