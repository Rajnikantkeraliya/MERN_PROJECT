import React from 'react'
import list from "../../../public/List.json"
import Cards from '../Cards/Cards'
import { NavLink } from 'react-router-dom'

function Cource() {

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
                <div className='font-semibold  mt-36 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>We're delighted To have You <span className=' text-pink-500'>Here!...)</span></h1>

                    <p className='mt-7 text-center font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis minus aperiam accusantium! Fuga, illum, voluptatum saepe ullam eius laboriosam sint excepturi amet eaque maiores dolorem, temporibus eveniet iusto deleniti odio sequi tempora. Natus consequatur, asperiores similique at blanditiis ut praesentium dolor cupiditate unde eius eaque consequuntur exercitationem laboriosam voluptatum. Architecto.</p>

                    <NavLink to={'/'} className="btn bg-pink-500 hover:text-black text-white cursor-pointer mt-12 px-8 py-1">Back</NavLink>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {list.map((item) => (<Cards item={item} key={item.id} />))}
                </div>
            </div>
        </>
    )
}

export default Cource
