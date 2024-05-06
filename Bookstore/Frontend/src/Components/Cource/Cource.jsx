import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import axios from "axios";
import { NavLink } from 'react-router-dom';

function Course() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log("Books fetched successfully:", res.data);
                setBooks(res.data);
            } catch (error) {
                console.error("Error fetching books:", error);
                setError(error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
            <div className='font-semibold mt-36 items-center justify-center text-center'>
                <h1 className='text-2xl md:text-4xl'>Welcome! <span className='text-pink-500'>We're Delighted to Have You Here!</span></h1>
                <p className='mt-7 text-center font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus aperiam accusantium! Fuga, illum, voluptatum saepe ullam eius laboriosam sint excepturi amet eaque maiores dolorem, temporibus eveniet iusto deleniti odio sequi tempora. Natus consequatur, asperiores similique at blanditiis ut praesentium dolor cupiditate unde eius eaque consequuntur exercitationem laboriosam voluptatum. Architecto.</p>
                <NavLink to={'/'} className="btn bg-pink-500 hover:text-black text-white cursor-pointer mt-12 px-8 py-1">Back</NavLink>
            </div>
            {error ? (
                <div className="text-red-600 mt-4 text-center">Error fetching books. Please try again later.</div>
            ) : (
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {books.map((book) => (
                        <Cards item={book} key={book.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Course;
