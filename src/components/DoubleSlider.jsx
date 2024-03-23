import Slider from "@mui/material/Slider";
import {useState,useEffect,useContext} from "react"
import { motion as m, AnimatePresence } from "framer-motion"
import { Router,NavLink } from "react-router-dom";
import ProductColumn from "./ProductColumn";
import { DisplayProductData } from "../Context/DisplayProductData";
import {SearchType} from "../Context/SearchType"

export default function DoubleSlider({minm,maxm,giveValue}){

    const [value1, setValue1] = useState([0, 100]);
    const minDistance=1;
    const [prodData,setProdData]=useContext(DisplayProductData);
    const [action,setAction]=useContext(SearchType);
    useEffect(()=>{

        if ((value1[0]===0) && (value1[1]===100)) {
            setAction(i=> ({...i,low:null,high:null}))
            setProdData()
        } else { 
            setAction(i=> 
                ({...i,
            low: Math.floor(value1[0]*(maxm-minm)/100)+minm,
            high: Math.ceil(value1[1]*(maxm-minm)/100)+minm
        }))
            setProdData()
        }


    },[value1])

    const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
        return;
    }

    if (activeThumb === 0) {
        setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
        setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
    giveValue([Math.floor(value1[0]*(maxm-minm)/100)+minm,Math.ceil(value1[1]*(maxm-minm)/100)+minm]);
    };

    return (
        <div className="flex flex-col w-full px-3 mt-5">
        <AnimatePresence>
        {(value1[0]!==0 || value1[1]!==100) && 
        <m.div
        key={Router.pathname}
        initial={{opacity:0,y:"100%"}}
        animate={{opacity:1,y:"0%"}}
        exit={{opacity:0,y:"100%"}}
        transition={{duration:0.5}}>
        <h1 className="text-2xl font-[Merriweather]">Active Filter</h1>
        <div className="flex space-x-4">
        <button className="rounded-full px-2 text-sm bg-slate-500 text-white opacity-45 hover:opacity-60 duration-500" onClick={()=>(setValue1([0,100]))}>X</button>
        <h1 className="text-md text-slate-500 font-light">from ${Math.floor(value1[0]*(maxm-minm)/100)+minm} to ${Math.ceil(value1[1]*(maxm-minm)/100)+minm}</h1>
        </div>
        </m.div>
        
        }
        </AnimatePresence>
        <h1 className="font-bold text-4xl">Filter by price</h1>
        <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value1}
        onChange={handleChange1}
        disableSwap
        sx={{color:"#8bc34a"}}
        />
        <div className="w-full flex justify-end space-x-4">
            <input type="text" value={`$${Math.floor(value1[0]*(maxm-minm)/100)+minm}`} className="w-12 h-9 rounded-md border border-slate-500 text-slate-500"/>
            <input type="text" value={`$${Math.ceil(value1[1]*(maxm-minm)/100)+minm}`} className="w-12 h-9 rounded-md border border-slate-500 text-slate-500"/>

        </div>
        <NavLink to="/Groceries" className={({isActive})=>{return isActive?"text-[#6a9739]":"";}}><h1 className="text-slate-500 text-md">Groceries(12)</h1></NavLink>
        <NavLink to="/Juices" className={({isActive})=>{return isActive?"text-[#6a9739]":"text-slate-500";}}><h1 className="text-md">Juices(12)</h1></NavLink>
        <div className="w-4/6 mt-8"><ProductColumn number={4}/></div>
        </div>
    )
}