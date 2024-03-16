import Rating from "@mui/material/Rating"

export default function CustomerReview({review}){


    return (
        <div className="flex flex-col items-center space-y-7 rounded-lg shadow-lg border px-10 py-20 w-full">
            <Rating name="read-only" value={review.rating} readOnly />
            <p>{review.message}</p>
            <div className="flex justify-center items-center">
                <img src={review.profilePick} alt="profile pick"/>
                <h1 className="ml-5">{review.customerName}</h1>
            </div>

        </div>
    )

}