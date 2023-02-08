import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../Tmdb/axios';
import requests from '../Tmdb/request';


const Banner = () => {
    const [movies,setMovies] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchMovies)
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            )
            return request;
        }
         fetchData();
    },[])
    console.log(movies)
  return (
    <div className='banner'>
        <div className='background-img'>
            <img src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`} alt='background' />
        </div>
        <div className='button'>
            <button className='btn1'>Play</button>
            <button className='btn2'>More Info</button>
        </div>
    </div>
  )
}

export default Banner