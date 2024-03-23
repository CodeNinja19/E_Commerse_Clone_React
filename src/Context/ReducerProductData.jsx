import { DisplayProductData } from "./DisplayProductData";
import { ProductData } from "./ProductData";
import {SearchType} from "./SearchType.jsx"

import { useReducer,useContext } from "react";

export default function ReducerProductData(props){

    const [data,setData]=useContext(ProductData);
    const [action,setAction]=useContext(SearchType);

    const reducer=function (state,a){

        let newData=[...data];
        switch(action.type){

            case "rating":{
                newData.sort((a,b)=>(a.rating-b.rating));
                console.log(newData);
                break
            }

            case "popularity":
                newData.sort((a,b)=>(a.rating-b.rating));
                break
            case "priceLow":
                newData.sort((a,b)=>(a.price-b.price));
                break

            case "priceHigh":
                newData.sort((a,b)=>(b.price-a.price));
                break

            case "default":
                newData=data;
                break

        };
        switch(action.work){
            case "search":{
                newData=newData.filter((e)=>(e.productName.toLowerCase().includes(action.search.toLowerCase())))
                break
            }

        };
        if (action.high!==null){ newData=newData.filter((e)=>(e.price<=action.high))}
        if (action.low!==null) {newData=newData.filter((e)=>(e.price>=action.low))}
        return newData;

    }
    const [prodData,setProdData]=useReducer(reducer,data);

    return (
        <DisplayProductData.Provider value={[prodData,setProdData]}>
            {props.children}
        </DisplayProductData.Provider>
    )

}