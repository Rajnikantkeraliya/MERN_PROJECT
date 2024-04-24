import React, { useState, useEffect } from 'react'
import Cart from '../Cart/Cart'

export default function Body() {

    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItems, setFoodItems] = useState([]);

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
        <div className='container'>

            {foodItems && foodItems.length !== 0 ?
                (
                    foodItems.map
                        ((data) =>
                        (
                            <div key={data._id}>
                                <div className='fs-3 m-3'>{data.CategoryName}</div>
                                <hr />
                                {foodCategory !== 0 ? foodCategory.filter
                                    ((item) =>
                                        item.CategoryName === data.CategoryName
                                    ).map(filteritem => {
                                        return (<div key={filteritem._id}><Cart /></div>)
                                    }) : <div>No such data Found </div>}
                            </div>
                        )
                        )
                ) : <div>loading</div>
            }
        </div>
    );
}
