import ShopNow from "./ShopNow.jsx"

export default function ShopNowList({shopItems}){

    return (
        <div className="flex flex-col bg-[#f8f6f3] xl:flex-row">
            {shopItems
            .map(
                (e)=>(
                <ShopNow heading={e.heading} description={e.description} item_image={e.item_image}/>
            ))}
        </div>
    )


}