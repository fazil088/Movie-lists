/**
 * The Banner component is a React functional component that displays a random movie as a banner with a
 * title, description, and buttons.
 * @returns The component is returning a div with a background image, a title, a description, and two
 * buttons.
 */
import React,{useState,useEffect} from 'react'
import './Banner.css'
import axios from '../../axios'
import { imageUrl } from '../../Constants/constants'
import { trending } from '../../MovieLinks'



function Banner() {
    const [movies,setMovies] = useState()
    useEffect(()=>{
      async function bannerUpdate(){
        try{
          const response = await axios.get(trending)
          const randomMovies = response.data.results[Math.floor(Math.random()*response.data.results.length)]
          setMovies(randomMovies)
        }
          catch(err){
          console.log(err)
        }
      }
      bannerUpdate();
      const interval = setInterval(bannerUpdate,30000)
      return ()=> clearInterval(interval)
    },[])

    
  return (
    <div 
    style={{backgroundImage: `url(${movies ? imageUrl+movies.backdrop_path : ""})`,objectFit:'cover'}}
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
