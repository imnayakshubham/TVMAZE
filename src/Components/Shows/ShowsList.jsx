import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { getShows } from '../../services/Apis/Apis'
import { Loading } from '../Loading/Loading'
import "./Shows.css"

export const ShowsList = () => {
    const navigateTo = useNavigate()
    const { isError, isLoading, data: shows } = useQuery('shows', getShows, { staleTime: 10000 })

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div className='error__page'>Error...</div>;
    }

    const handleShow = (show) => {
        navigateTo(`show/${show.id}`, { state: show })
    }

    return (
        <div className='shows__container'>
            {
                Object.entries(shows || {}).map(([categories, showsData], key) =>
                    <div className="row" key={key}>
                        <h2 className='category__title'>
                            {categories}
                        </h2>
                        <div className="row_posters">
                            {showsData.map((show) => (
                                <img
                                    key={show.id}
                                    className={`poster_img`}
                                    src={show.image.medium}
                                    alt={show.name}
                                    onClick={() => handleShow(show)}
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    )
}
