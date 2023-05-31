import React,{useState,useEffect} from 'react'
import './RowList.css'
import axios from '../../axios'

function RowList() {
    useEffect(()=>{
        axios.get(`/trending/movie/day?language=en-US`).then((response)=>{
            console.log(response)
        }).catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <div className='rowMovies'>
        <h2>Trending</h2>
        <img className='rowImg' src="" alt="Movie" />
    </div>
  )
}

export default RowList
