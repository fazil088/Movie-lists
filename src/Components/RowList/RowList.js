import React,{useState,useEffect} from 'react'
import './RowList.css'
import axios from 'axios'
import { baseUrl,language,page,accessToken,imageUrl } from '../../Constants/constants'

function RowList(props) {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get(`${baseUrl}movie/top_rated`,{
            params:{
                language,
                page,
            },
            headers:{
                accept : 'application/json',
                Authorization : `Bearer ${accessToken}`
            }
        }).then((response)=>{
            setMovies(response.data.results)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    // console.log(movies)
  return (
    <div className='rowMovies'>
        <h2>{props.title}</h2>
        <div className="rowList">
        {
            movies.map((obj,k)=>{
                return(
                    <img key={k} className='rowImg' src={imageUrl+obj.poster_path} alt="Movie" />
                )
            })
        }
        </div>
        
    </div>
  )
}

export default RowList
