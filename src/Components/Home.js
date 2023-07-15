import React from 'react';
import './Home.css'


const Home = () => {
  return (
    <>
      <div className='organizer'>
        <div className='titleImageBox'>
          <h1 className='websiteTitle'>Alien<br></br> Nft's</h1>  
          {/* <div className='spaceShip'></div> */}
        </div>

        <div className='homeShowCase'>
          <div className='nftImagesShowCase n1'></div>
          <div className='nftImagesShowCase n2'></div>
          <div className='nftImagesShowCase n3'></div>
        </div>
      </div>
    </>
  )
}

export default Home