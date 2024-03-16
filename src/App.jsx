
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { useState } from "react"
import Coffee from "./assets/coffee-product.jpg"
import RedChillies from "./assets/red-chillies-product.jpg"
import edibleOil from "./assets/edible-oil-product.jpg"
import sanitizer from "./assets/sanitizer-product.jpg"
import OrangeJuice from "./assets/orange-juice-product.jpg"
import CashewButter from "./assets/cashew-butter-product.jpg"
import DiabeticCookies from "./assets/diabetic-cookies-product.jpg"
import Eggs from "./assets/eggs-product.jpg"
import OrgaincHoney from "./assets/organic-honey-product.jpg"
import FaceWash from "./assets/face-wash-product.jpg"
import Pulses from "./assets/pulses-product.jpg"
import Wheat from "./assets/wheat-product.jpg"
import { ProductData } from "./Context/ProductData"
import {ProductOfInterest} from "./Context/ProductOfInterest";
import {v4 as uuid } from "uuid"
import { Outlet } from "react-router-dom"
import ReducerProductData from "./Context/ReducerProductData";
import UseSearch from "./Context/UseSearch"


function App() {
  
  const [products, setProducts] = useState(
    [{id:uuid(), img: Coffee, category: "Groceries", productName: 'Coffee', rating: 4,display:true,quantity:0,price:10.00 },
    {id:uuid(), img: RedChillies, category: "Groceries", productName: 'Red chillies', rating: 3,display:true,quantity:0,price:15.00},
    {id:uuid(), img: edibleOil, category: "Groceries", productName: 'Edible oil', rating: 5,display:true,quantity:0,price:17.00 },
    {id:uuid(), img: sanitizer, category: "Groceries", productName: 'Sanitizer', rating: 2,display:true,quantity:0,price:19.00 },
    {id:uuid(), img: OrangeJuice, category: "Groceries", productName: 'Orange juice', rating: 3,display:true,quantity:0,price:20.00 },
    {id:uuid(),img:CashewButter,category:"Groceries",productName:"Cashew Butter",rating:2,display:true,quantity:0,price:35.00},
    {id:uuid(),img:DiabeticCookies,category:"Groceries",productName:"Diabetic Cookies",rating:4,display:true,quantity:0,price:20.00},
    {id:uuid(),img:Eggs,category:"Groceries",productName:"Eggs",rating:3,display:true,quantity:0,price:23.00},
    {id:uuid(),img:OrgaincHoney,category:"Groceries",productName:"Organic Honey",rating:5,display:true,quantity:0,price:21.00},
    {id:uuid(),img:FaceWash,category:"Groceries",productName:"Face Wash",rating:4,display:true,quantity:0,price:8.00},
    {id:uuid(),img:Pulses,category:"Groceries",productName:"Pulses",rating:3,display:true,quantity:0,price:45.00},
    {id:uuid(),img:Wheat,category:"Groceries",productName:"Wheat",rating:3,display:true,quantity:0,price:31.00}
    ]);

    const [purchase,setPurchase]=useState(products[Math.floor(Math.random()*12)]);

  return (
    <>
    <ProductData.Provider value={[products,setProducts]}>
    <ProductOfInterest.Provider value={[purchase,setPurchase]}>
    <UseSearch>
    <ReducerProductData>
    
    <NavBar/> 
    <Outlet/>
    <Footer/>
    </ReducerProductData>
    </UseSearch>
    </ProductOfInterest.Provider>
    </ProductData.Provider>
    
    </>
  )
}

export default App;
