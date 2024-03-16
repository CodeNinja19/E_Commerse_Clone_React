import {NavLink} from "react-router-dom"
import scrollTop from "../Hooks/scrollTop"

export default function ShopNow({heading,description,item_image}){

    return(
        <div className="flex flex-col mx-8 p-4 bg-white rounded-xl my-11 grow">
            <h1 className="text-3xl font-semibold mt-5">{heading}</h1>
            <p className="text-lg mt-2 mb-10">{description}</p>
            <div className="flex justify-between items-end">
                <h1 className="md:hidden"></h1>
                <NavLink to="/Everything"><button className="text-white bg-[#6a9739] px-10 h-14 rounded-lg text-lg font-semibold mb-2 ml-2 hover:opacity-50" onClick={scrollTop}>Shop Now &#8594;</button></NavLink>
                <img src={item_image} alt="item-image" className="w-24"/>
            </div>
        </div>
    )
}