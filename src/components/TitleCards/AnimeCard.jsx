import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';




const AnimeCards = ({title,category}) => {
  const [apiData,setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmIxYmRkMzQ1ZTNjZDk0MGE3NWM5NDUwM2E2MDA4MyIsIm5iZiI6MTczNDQxMjM0MS40ODUsInN1YiI6IjY3NjEwODM1MzYzMWZjNjdiNWI0ZjVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DpK6PlG3-RZlPlt1RL-K8nV_YP7BFiYl_C0_hG57MbY'
    }
  };
 


const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft+=event.deltaY;

}
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/tv/${category?category:"top_rated" }?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));


  cardsRef.current.addEventListener('wheel',handleWheel)
},[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netfilx"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
          <p>{card.original_name}</p>
          </Link>
        })}
      </div>
      
    </div>
  )
}

export default AnimeCards