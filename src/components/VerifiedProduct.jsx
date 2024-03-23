import ShopButton from "./ShopButton";
import VerifiedLogo from "../assets/verified-products.png"
import leafPng from "../assets/logo-leaf.png";
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';
import {NavLink} from "react-router-dom"
export default function VerifiedProduct() {

    const checked1 = ["Fresh Fruits", "Dry Fruits", "Fresh Vegetables", "Dried Vegetables"];
    const checked2 = ["Beaut Products", "Dairy Products", "Organic honey", "Organic tea"];
    return (
        <div className="flex flex-col items-center px-3 py-2 mt-5 w-full">
            <div className="flex flex-col items-center md:flex-row">
                <img src={VerifiedLogo} alt="verified Organic" className="w-48 md:w-32 mx-3" />
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-xl font-bold">Certified Products</h1>
                    <h2 className="text-lg  text-slate-600 text-center md:text-left">Click edit button to change this text. Lorem ipsum dolor sit amet</h2>
                </div>
            </div>
            <p className="text-3xl font-medium text-center md:mt-5 md:mb-2">We Deal With Various Quality Organic Products!</p>
            <div className="flex justify-center my-5 md:justify-start w-full pl-8">
                <img src={leafPng} alt="leaf" className="w-28 md:w-20" />
            </div>
            <div className="flex items-center w-full">
                <div className="grow flex flex-col ml-3 space-y-2">{checked1.map(
                    (e) => (
                        <span className="flex space-x-2">
                            <CheckCircleOutlineTwoToneIcon color="success" />
                            <h1 className="text-left">{e}</h1>
                        </span>
                    )
                )}</div>
                <div className="grow flex flex-col space-y-2">
                    {checked2.map(
                        (e) => (
                            <span className="flex space-x-2">
                                <CheckCircleOutlineTwoToneIcon color="success" />
                                <h1 className="text-left">{e}</h1>
                            </span>
                        )
                    )}
                </div>
            </div>
            <div className="flex justify-center my-4 ml-4 w-full md:justify-start"><NavLink to="/Everything" onClick={()=>(window.scrollTo(0,0))}><ShopButton text="Start Shopping"/></NavLink></div>


        </div>
    )
}