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
    },[])

    function handleVideoPlay(id){
        instance.get(`movie/${id}/videos`).then((response)=>{
            if(response.data.results.length !== 0){
                setYoutubeUrl(response.data.results[0])
            }
        })
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
        <h2>{props.title}</h2>
        <div className="rowList">
        {
            movies.map((obj,k)=>{
                return(
                    <img onClick={()=>{handleVideoPlay(obj.id)}} key={k} className={props.isSmall ? 'rowImgS2' : 'rowImgS1'} src={imageUrl+obj.poster_path} alt="Movie" />
                )
            })
        }
        </div>
        {youtubeUrl &&  <Youtube className='playVideo' opts={videoOpt} videoId={youtubeUrl.key}/>}
    </div>
  )
}

export default RowList
