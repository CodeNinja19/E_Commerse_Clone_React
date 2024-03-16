
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
export default function ShopButton({text}){

    return (

        <button className="text-white bg-[#6a9739] px-10 h-14 rounded-lg text-lg font-semibold mb-2 ml-2 hover:opacity-50 duration-500">
            <ShoppingCartSharpIcon sx={{color:"white"}}/> {text}
            </button>
    )
}