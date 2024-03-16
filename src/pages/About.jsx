import partitionLeaf from "../assets/partition-leaf.png"
import grapes from "../assets/grapes-items.jpg"
import CustomerReview from "../components/CustomerReview"
import MilaKunis from "../assets/review-profilePick-1.png"
import VerifiedProduct from "../components/VerifiedProduct"


export default function About() {
    const review1={
        rating:3,
        message:"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        profilePick:MilaKunis,
        customerName:"Mila Kunis"
      }

    return (
        <>
            <div className="bg-[#f8f6f3] h-40 flex font-bold  justify-center text-6xl md:items-center md:h-52 font-[Merriweather]">About Us</div>
            <div className="flex justify-center">
                <img src={partitionLeaf} alt="Leaf" className="-translate-y-4 w-40" />
            </div>
            <div className="flex flex-col items-center mx-5 lg:flex-row lg:items-start">
                <div className="flex  lg:w-1 lg:grow  flex-col items-center justify-center">
                    <h1 className="text-4xl font-semibold mb-3 text-center">We Are Your Favourite Store.</h1>
                    <p className="text-center">Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices
                        mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue.
                        Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio
                        ultrices consequuntur numqu.</p>
                    <br />

                    <p className="text-center">Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc
                        posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada
                        proident platea corrupti expedita.</p>
                </div>
                <div className="flex w-screen lg:w-1 lg:grow flex-col items-center justify-center mt-5 lg:mt-0 ">
                    <img src={grapes} alt="grapes" className=" w-4/5 aspect-[4/3]" />
                </div>
            </div>
            <div className="flex flex-col bg-[#001524] text-white text-xl items-center space-y-4 py-16 mt-4 md:flex-row md:space-y-0 ">
                <h1 className="pl-10">Numbers Speak For Themselves!</h1>
                <div className="flex w-screen flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:justify-around">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-semibold">5,000+</h1>
                        <h1>Curated Products</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-semibold">800+</h1>
                        <h1>Curated Products</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-semibold">40+</h1>
                        <h1>Product Categories</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-5 my-20 md:flex-row space-x-5">
                <div className="md:w-1 md:grow"><CustomerReview review={review1}/></div>
                <div className="md:w-1 md:grow"><VerifiedProduct/></div>
            </div>
        </>
    )
}