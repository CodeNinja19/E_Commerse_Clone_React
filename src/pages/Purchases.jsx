
import ProductPurchase from "../components/ProductPurchase";
import ItemPurchase from "../components/ItemPurchase";

export default function Purchases(){


    return (
        <div className="bg-[#f8f6f3]">
        <ItemPurchase/>
        <div className="px-1 max-w-[85rem] md:mx-auto">
        <h1 className="text-4xl font-semibold mx-3 text-center md:text-start">Related Products</h1>
        <ProductPurchase/></div>
        </div>
    )
}