import React from 'react';
import { BsStarFill, BsStarHalf } from "react-icons/bs"
import { Link } from 'react-router-dom';


const CourseCard = ({ course }) => {

    console.log(course)

    const { picture, _id, title, price } = course

    return (
        <Link to={`/courses/${course._id}`} className='p-3 border rounded shadow hover:shadow-lg lg:mt-10'>
            <img src={picture} alt="" />
            <div className='mt-4'>
                <h3 className='text-md font-bold text-gray-700'>{title}</h3>
                <span className='text-sm text-gray-600'>Developer Mahin</span>
                <div className='flex items-center gap-2'>
                    <span className='text-sm'>4.5</span>
                    <div className='flex items-center'>
                        <span><BsStarFill className='text-yellow-500 text-sm' /></span>
                        <span><BsStarFill className='text-yellow-500 text-sm' /></span>
                        <span><BsStarFill className='text-yellow-500 text-sm' /></span>
                        <span><BsStarFill className='text-yellow-500 text-sm' /></span>
                        <span><BsStarHalf className='text-yellow-500 text-sm' /></span>
                    </div>
                    <span className='text-sm text-gray-600'>(7,961)</span>
                </div>
                <div className='my-2'>
                    <span className='font-bold'>${price}</span>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;