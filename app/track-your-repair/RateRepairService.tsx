import React, { useState } from 'react'
import TextArea from '../components/ui/textarea';

function RateRepairService() {

    const [rating, setRating] = useState<number>(0); // Initial rating is 0
    // const [review, setReview] = useState<string>(''); // Initial review is empty
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleRatingClick = (value: number): void => {
        setRating(value); // Set the rating when a star is clicked
    };

    // const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    //     setReview(e.target.value); // Update review as the user types
    // };
    return (
        <div className='mt-16 mb-14'>
            <div className='bg-white shadow-md rounded-[10px] w-full py-6 px-5'>
                <h3 className='text-center text-base mb-1 text-[#211D1D]'>Rate our Repair Service </h3>

                <span className='flex items-center gap-6 mb-4 justify-center'>
                        {[1, 2, 3, 4, 5].map((star, index) => (
                            <span key={index} className='cursor-pointer'
                                onClick={() => handleRatingClick(star)}
                                style={{ cursor: 'pointer', color: star <= rating ? '#000000' : '#D9D9D9', fontSize: '30px' }}
                            >
                                ★
                            </span>
                        ))}
                    </span>

                    <TextArea placeholder='Write a Review' className='!border-none !bg-[#D9D9D929] !px-4'/>
            </div>
              <button className="bg-[#FFCC29] font-medium !mt-5 mb-4 flex items-center justify-center ml-auto text-sm rounded-lg text-[#211D1D] py-3 px-10 transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D]">
            Rate
          </button>
        </div>

    )
}

export default RateRepairService