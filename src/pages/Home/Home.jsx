import React from 'react'
import './Home.css'
import Navabr from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards';
import PagesData from '../../components/TitleCards/PageCards';
import ListsData from '../../components/TitleCards/ListCards';
import AnimeCards from '../../components/TitleCards/AnimeCard';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navabr/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-captions">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order,a young man living in morden Istanbul enbarks on a quest to save the city from an immortal enemy. </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Netfilx"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top Pics for You"} category={"top_rated"}/>
      <AnimeCards title={"Tv Shows"} category={"top_rated"}/>
      <AnimeCards title={"Tv Show Today"} category={"airing_today"}/>
      <PagesData/>
      <ListsData/>
      </div>
      <Footer/>

    </div>
  )
}

export default Home;