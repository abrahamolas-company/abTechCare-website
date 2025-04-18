import React, { useEffect, useState } from 'react'
import TextArea from '../components/ui/textarea';
import { useRouter } from 'next/navigation';
import { useAddRatings } from '../api/apiClient';
import { toast } from 'sonner';
import { catchError } from '../components/constants/catchError';

function RateRepairService() {
    const router = useRouter()
    const addRatings = useAddRatings()

    const [rating, setRating] = useState<number>(0)
    const [comments, setComments] = useState<string>('')
console.log('rating'+ " " +rating , 'comments'+ " " + comments)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [userId, setUserId] = useState<number>();

    const handleRatingClick = (value: number): void => {
        setRating(value); // Set the rating when a star is clicked
    };

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setComments(e.target.value); // Update comment as the user types
    };

    async function handleSubmit() {
        if (!userId) {
            toast.error("User not authenticated")
            return
        }

        setIsLoading(true)

        await addRatings({
            userId,
            rating,
            comments
        })
            .then((response) => {
                console.log({response})
                toast.success('Thank you for your feedback!')
                setComments('')
                setRating(0)
                router.push('/')
            })
            .catch((error) => {
                catchError(error)
                toast.error('Failed to submit rating. Please try again.')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }


    useEffect(() => {
        const storedId = localStorage.getItem('userId');
        if (storedId) {
            setUserId(JSON.parse(storedId));
        }
    }, []);

    return (
        <div className='mt-16 mb-14 w-1/2 mx-auto'>
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

                <TextArea 
                placeholder='Write a Review' 
                value={comments}
                onChange={(e) => handleCommentChange(e)}
                className='!border-none !bg-[#D9D9D929] !px-4' 
                />
            </div>
            <button
             type='button' 
             onClick={handleSubmit}
             disabled={isLoading}
             className="bg-[#FFCC29] font-medium !mt-5 mb-4 flex items-center justify-center ml-auto text-sm rounded-lg text-[#211D1D] py-3 min-w-[150px] transition-all ease-in-out duration-300 border border-[#FFCC29] hover:bg-transparent hover:text-[#211D1D] disabled:opacity-50 disabled:pointer-events-none">
               {isLoading ? 'Submitting...' : 'Rate'}
            </button>
        </div>

    )
}

export default RateRepairService