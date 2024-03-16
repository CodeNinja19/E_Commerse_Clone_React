import ProductWindow from "../components/ProductWindow";
import FilterProduct from "../components/FilterProduct";
import {SearchType} from "../Context/SearchType"
import {useContext} from "react"
export default function Juices() {

    const message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident odit consequatur dolore vero nisi! Voluptatem, numquam voluptatum minus voluptates ex sequi? Inventore unde cupiditate pariatur maxime, atque ut voluptatum. Explicabo!";
    const [action,setAction]=useContext(SearchType); 
    return (
        <div className="flex flex-col bg-[#f8f6f3] lg:flex-row-reverse lg:py-8 ">
            <div className="lg:border-l border-slate-300 lg:grow lg:w-[60%] "><ProductWindow displayType={"Juices"} search={action.search} message={message}/></div>
            <div className="lg:w-[30%]"><FilterProduct/></div>
        </div>
    )
}