import React,{useState,useEffect} from 'react';
import Youtube from 'react-youtube'
import './RowList.css'
import instance from '../../axios'
import { imageUrl } from '../../Constants/constants'

function RowList(props) {
    const {url} = props
    const [movies,setMovies] = useState([])
    const [youtubeUrl,setYoutubeUrl]=useState('')
    useEffect(()=>{
        instance.get(url).then((response)=>{
            setMovies(response.data.results)
        }).catch(err=>{
            console.log(err)
        })
    },[]) // eslint-disable-line 

    function handleVideoPlay(id){
        instance.get(`movie/${id}/videos`).then((response)=>{
            if(response.data.results.length !== 0){
                setYoutubeUrl(response.data.results[0])
            }
        })
    }

    function closeVideoPlay(){
        if(youtubeUrl){
            setYoutubeUrl('')
        }
    }

    const videoOpt = {
        height : '500px',
        width : '80%',
        playerVars:{
            autoplay: 0
        }
    }

  return (
    <div className='rowMovies'>
        <h2 className='title'>{props.title}</h2>
        <div className="rowList">
        {
            movies.map((obj,k)=>{
                return(
                    <div className='imagesShow'
                     key={k}>
                        <img
                            className='movie-image'
                            src={imageUrl+obj.poster_path} alt="Movie" 
                        />
                        <div className='movie-overview'>
                            <h4>{obj.title}</h4>
                            <p>Release Date : {obj.release_date}</p>
                            <p>Vote Average : {obj.vote_average}</p>
                            <button className='trailerBtn' onClick={()=>{handleVideoPlay(obj.id)}}>Trailer</button>
                        </div>
                    </div>
                )
            })
        }
        </div>
        <div className='playTrailer'>
            {youtubeUrl && <i className='fa-solid fa-xmark' onClick={closeVideoPlay} ></i>}
            {youtubeUrl &&  <Youtube className='youtubeVideo'  opts={videoOpt} videoId={youtubeUrl.key}/>}
        </div>
    </div>
  )
}

export default RowList;
