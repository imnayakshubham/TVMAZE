import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import Select from "react-select"
import { useDebounce } from '../../hooks/useDebounce'
import { getShowsbasedOnSearch } from '../../services/Apis/Apis'

import "./Header.css"

export const Header = () => {
    const [searchedShow, setSearchedShow] = useState("")

    const debounce = useDebounce(searchedShow, 500)
    const { data: searchedShows } = useQuery(
        ['searchedShows', debounce],
        () => getShowsbasedOnSearch(debounce),
        { initialData: [] },
        { enabled: Boolean(debounce) }
    )

    const customStyles = {
        control: (base, state) => ({
            ...base,
            width: '300px',
        }),
        indicatorSeparator: () => ({
            display: "none"
        })
    };


    const handleSearch = (searchTerm) => {
        setSearchedShow(searchTerm)
    }

    const selectOptions = useMemo(() => searchedShows.map((option) => ({
        value: option.id, label: option.name, img: option.image?.medium ?? option.image?.original ?? "",
        show: option
    })), [searchedShows])

    return (
        <header className='header__container'>
            <div className='header__left'>
                <Link to={"/"} className="home__title"><h2>TVMAZE</h2></Link>

            </div>
            <div className='header__right'>
                <div className='header__options'>
                    <Select placeholder="Search Shows" options={selectOptions} onInputChange={(value) => handleSearch(value)} components={{ DropdownIndicator: null, Option: Option }} styles={customStyles} noOptionsMessage={() => debounce && !searchedShows.length ? "No Results" : debounce ? "Searching..." : null} />
                </div>
            </div>
        </header>
    )
}


const Option = (option) => {
    const navigateTo = useNavigate()
    return (
        <div className='option' onClick={() => navigateTo(`show/${option.value}`, { state: option.data.show })}>
            <img src={option.data.img} className="option__image" alt={option.name} loading="lazy" />
            <div className='option__desc'>
                <span className='label__text'>{option.label}</span>
                <span className='subtitle'>{option.data?.show.genres?.join(", ") ?? null}</span>
            </div>
        </div >
    );
};
