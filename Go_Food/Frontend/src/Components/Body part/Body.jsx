import React, { useState, useEffect } from 'react'
import Cart from '../Cart/Cart'


export default function Body() {

    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItems, setFoodItems] = useState([]);
    const [search, setSearch] = useState('');

    const loaddata = async () => {
        try {
            const response = await fetch("http://localhost:5000/signup/fooddata", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({}) // Add an empty object as the body
            });

            const data = await response.json();
            console.log(data); // Log the response data to see what's returned

            // Update state variables with the response data
            setFoodCategory(data[0]);
            setFoodItems(data[1]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        loaddata();
    }, []);



    return (

        <>

            <div>

                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>

                    <div className="carousel-inner" id='carousel'>
                        <div className="carousel-caption" style={{ zIndex: "10" }}>
                            <div className="d-flex justify-content-center" >
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />

                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x700/?chips" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            <div className='container'>

                {foodItems && foodItems.length !== 0 ?
                    (
                        foodItems.map
                            ((data) =>
                            (
                                <div className='row mb-3'>
                                    <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
                                    <hr />
                                    {foodCategory !== 0 ? foodCategory.filter((item) =>
                                        (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))
                                    ).map(filteritem => (
                                        <div key={filteritem._id} className='col-12 col-md-6 col-lg-3'>
                                            <Cart filteritem={filteritem} options={filteritem.options[0]} />
                                        </div>
                                    )) : <div>No such data Found </div>}

                                </div>
                            )
                            )
                    ) : <div>loading</div>
                }
            </div>
        </>
    );
}
