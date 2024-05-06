import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Slider from "react-slick";
import Cards from "../Cards/Cards";

function Freebook() {

    const [books, setBooks] = useState([]);


    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log("Books fetched successfully:", res.data);
                const data = res.data.filter((data) => data.category === "Free")
                setBooks(data);
            } catch (error) {
                console.error("Error fetching books:", error);
                setError(error);
            }
        };

        fetchBooks();
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-bold text-xl pb-2'>Free Offered Cource</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae veniam soluta similique sed dignissimos necessitatibus ex eligendi, eius sequi placeat, quae aliquam repellendus quisquam excepturi!</p>
                </div>

                <div>
                    <Slider {...settings}>
                        {books.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>


    );
}

export default Freebook;
