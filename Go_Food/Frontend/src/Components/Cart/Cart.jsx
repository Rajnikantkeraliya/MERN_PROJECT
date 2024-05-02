import React, { useState, useEffect, useRef } from 'react'
import style from './Cart.module.css'
import pizza from "../../Assets/Pizza.png"
import { usecart, usedispatchcart } from '../Contextreducer'

export default function Cart({ filteritem, options }) {

    const dispatch = usedispatchcart()
    const priceref = useRef()
    const data = usecart()
    let priceoption = Object.keys(options)

    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")


    const handleaddtocart = async () => {
        await dispatch({ type: "ADD", id: filteritem._id, name: filteritem.name, price: finalprice, qty: qty, size: size })
        console.log(data)
    }

    let finalprice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceref.current.value)
    }, [])

    return (
        <div>
            <div className={`card m-3 ${style.body_container}`}>
                <img src={filteritem.img} className="card-img-top" alt="..." style={{ height: "250px", objectFit: "fill" }} />
                <div className="card-body">
                    <h5 className="card-title">{filteritem.name}</h5>
                    <div className='container w-100'>
                        <select className='m-2  h-100 pl-3  bg-success rounded' onChange={(e) => setQty(e.target.value)}>

                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}

                        </select>


                        <select className='m-2 h-100 pl-3  bg-success rounded' ref={priceref} onChange={(e) => setSize(e.target.value)}>
                            {priceoption.map((data) => {
                                return <option className='fs-5' key={data} value={data}>{data.toUpperCase()}</option>;
                            })}
                        </select>
                        <div className='d-inline h-100 fs-5 fw-bold'>
                            ₹{finalprice}/-
                        </div>
                    </div>
                    <hr />
                    <button className="btn btn-success justify-center ms-2" onClick={handleaddtocart}>Add To Cart</button>
                </div>
            </div>
        </div >
    )
}
