import {SearchType} from "./SearchType.jsx"
import {useState} from "react"

export default function UseSearch(props){

    const [action,setAction]= useState({type:"default",low:null,high:null,search:"",work:""});

    return (
        <SearchType.Provider value={[action,setAction]}>
            {props.children}
        </SearchType.Provider>
    )

}