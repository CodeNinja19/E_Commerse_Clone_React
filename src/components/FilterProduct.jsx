import {useState,useContext,useEffect} from "react";
import TextInput from "./TextInput";
import DoubleSlider from "./DoubleSlider";
import { DisplayProductData } from "../Context/DisplayProductData";
import {SearchType} from "../Context/SearchType"
export default function FilterProduct(){
    const [productValue,setProductValue]=useState("");
    const [values,setValues]=useState([10,40]);
    const [data,setData]=useContext(DisplayProductData);
    const [action,setAction]=useContext(SearchType);
    useEffect(()=>{
        setAction(i=>({...i,work:"search",search:productValue}))
        setData()
    },[productValue])
    return (
        <div className="flex flex-col w-full px-3 items-center pt-10 bg-[#f8f6f3]">
            <TextInput changeValue={setProductValue}/>
            <DoubleSlider minm={1} maxm={48} giveValue={setValues}/>
        </div>
    )
}