import ProductDisplay from "./ProductDisplay";

export default function ProductWindow({displayType,message="",search}){


    return (
        <div className="bg-[#f8f6f3] pt-3">
        <div className="px-6 space-y-5">
        <h1 className="font-light text-slate-500">Home/{displayType}</h1>
        <h1 className="text-5xl text-[#8bc34a] font-[Merriweather]">{search===""?displayType:`Search result of ${search} are:`}</h1>
        <p className="text-lg">{message}</p>
        </div>
        <ProductDisplay/>
        </div>
    )
}