import ProductWindow from "../components/ProductWindow";
import FilterProduct from "../components/FilterProduct";
import {SearchType} from "../Context/SearchType"
import {useContext} from "react"
export default function Everything() {
    const [action,setAction]=useContext(SearchType);
    return (
        <div className="flex flex-col bg-[#f8f6f3] lg:flex-row-reverse lg:py-8 ">
            <div className="lg:border-l border-slate-300 lg:grow lg:w-[60%]"><ProductWindow displayType={"Shop"} search={action.search}/></div>
            <div className="lg:w-[30%]"><FilterProduct/></div>
        </div>
    )
}