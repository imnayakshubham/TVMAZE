import React from 'react'
import { FaStar } from "react-icons/fa";
import "./Ratings.css"


export const Ratings = ({ rating }) => {
    return (
        <div className='rating__container'>
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label key={index}>
                        <input
                            className='radio'
                            type="radio"
                            value={givenRating}
                        />
                        <span className='rating'>
                            <FaStar
                                color={
                                    givenRating <= rating || givenRating === rating
                                        ? "orange"
                                        : "rgb(192,192,192)"
                                }
                            />
                        </span>
                    </label>
                );
            })}
        </div>
    )
}
