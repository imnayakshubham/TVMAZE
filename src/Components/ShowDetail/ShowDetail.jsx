import React from 'react'
import { useLocation } from 'react-router-dom'
import { Ratings } from '../Ratings/Ratings'
import "./ShowDetail.css"

export const ShowDetail = () => {
    const { state: show } = useLocation()
    return (
        <div className='card__wrapper'>
            <div className='card'>
                <div className='card__container'>
                    <div className='img__wrapper'><img src={show.image.original} alt={show.name} className="show__image" /></div>
                    <div className='info__wrapper'>
                        <div className='show__description__container'>
                            <div className='title__container'>
                                <div className='show__title'>
                                    <h2>
                                        {show.name}
                                    </h2>
                                </div>
                                <div className='show__rating'>
                                    <span>
                                        <Ratings rating={show.rating.average / 2} />
                                    </span>
                                </div>
                            </div>

                            <div className='show__genre'>
                                <span>{
                                    show.genres.join(", ")
                                }</span>

                            </div>
                            <div className='show__description'>
                                Movie Description:<div dangerouslySetInnerHTML={{ __html: show.summary }} />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div >

    )
}
