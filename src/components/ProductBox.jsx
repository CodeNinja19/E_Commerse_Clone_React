import Product from "./Product"

export default function ProductList({data}){

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3">{data.map((e)=>(
            <Product data={e}/>
        ))}</div>
    )
}