import React,{useState,useEffect} from 'react'
import './Banner.css'
import axios from '../../axios'
import { api_key,imageUrl } from '../../Constants/constants'

function Banner() {
    const [movies,setMovies] = useState()
    useEffect(()=>{
        axios.get(`movie/popular?api_key=${api_key}`).then((response)=>{
            setMovies(response.data.results[Math.floor(Math.random()*response.data.results.length)])
        }).catch(err=>{
            console.log(err)
        })
    },[])

  return (
    <div 
    style={{backgroundImage: `url(${movies ? imageUrl+movies.backdrop_path : ""})`}}
    className='banner'>
      <div className="content">
        <h2 className='title'>{movies ? movies.title : ""}</h2>
        <p className="description">{movies ? movies.overview : ""}</p>
        <div className="btns">
            <button className="btn">Play</button>
            <button className="btn">Like</button>
        </div>
      </div>
    </div>
  )
}

export default Banner