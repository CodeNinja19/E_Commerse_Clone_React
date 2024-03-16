import {useState} from "react"

export default function TextInput({changeValue}){
    const [productName,setProductName]=useState("");
    function changeForm(e){
        setProductName(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        changeValue(productName)
        setProductName("")
    }
    return (
        <form className="flex w-full justify-center space-x-2" onSubmit={handleSubmit}>
            <input type="text" value={productName} onChange={changeForm} className="border focus:border-blue-400 h-8 w-5/6 rounded-md pl-3 focus:caret-blue-400 focus:outline-0" placeholder="Search a item"/>
            <button className="text-white text-2xl bg-[#8bc34a] w-10 hover:opacity-70 duration-500">{">"}</button>
        </form>
    )
}