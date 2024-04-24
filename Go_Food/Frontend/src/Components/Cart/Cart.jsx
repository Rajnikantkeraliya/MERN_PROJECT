import React, { useState, useEffect } from 'react'
import style from './Cart.module.css'
import pizza from "../../Assets/Pizza.png"

export default function Cart() {


    return (
        <div>
            <div className={`card m-3 ${style.body_container}`}>
                <img src={pizza} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"> Best Pizza</p>
                    <div className='container w-100'>
                        <select className='m-2  h-100 pl-3  bg-success rounded'>

                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}

                        </select>
                        <select className='m-2 h-100 pl-3  bg-success rounded'>
                            <option value="Half">Half</option>
                            <option value="Full">Full</option>
                        </select>
                        <div className='d-inline h-100 fs-5 fw-bold'>Total Price</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
