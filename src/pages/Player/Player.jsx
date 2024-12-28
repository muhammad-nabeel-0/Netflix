import React, { useEffect, useState } from 'react';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import './Player.css'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const navigate  = useNavigate();
  const {id} = useParams();

  const [apiData,setApiData] = useState({
    name: "",
    key:"",
    published_at:"",
    type: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmIxYmRkMzQ1ZTNjZDk0MGE3NWM5NDUwM2E2MDA4MyIsIm5iZiI6MTczNDQxMjM0MS40ODUsInN1YiI6IjY3NjEwODM1MzYzMWZjNjdiNWI0ZjVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DpK6PlG3-RZlPlt1RL-K8nV_YP7BFiYl_C0_hG57MbY'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

  },[]);
  
 
  
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back Arrow" onClick={()=>{navigate(-2)}} />
      <iframe 
        width='90%' 
        height='90%' 
        src={`https://www.youtube.com/embed/${apiData.key}` }
        title='trailer' 
        frameBorder='0' 
        allowFullScreen>
      </iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;