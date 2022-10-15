import React from 'react'
import Header from '../../component/Header/Header'
import Navbar from '../../component/Navbar/Navbar'
import hero from '../../images/hero1.jpeg'
import s1 from '../../images/axio.png'
import s2 from '../../images/bodytudex.webp'
import s3 from '../../images/keepsake.jpeg'
import s4 from '../../images/ezysolare.avif'
import './homePage.css'
const HomePage = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <div className='slider'>
        <img src={hero}/>
      </div>
      <div className='emerging-startup'>
        <div className='heading'>
          <div className='line'></div>
          <span>Emerging Start-ups</span>
          <div className='line'></div>
        </div>
        <div className='startup-cards'>
        <div className='container row'>
          <div className='col-md-3 s-card'>
              <div className='s-card-img'>
                  <img src={s1}/>
              </div>
              <div className='s-card-title'>
                  AXIO
              </div>
          </div>
          <div className='col-md-3 s-card'>
          <div className='s-card-img'>
                  <img src={s2}/>
              </div>
              <div className='s-card-title'>
                  Bodytude
              </div>
          </div>
          <div className='col-md-3 s-card'>
          <div className='s-card-img'>
                  <img src={s3}/>
              </div>
              <div className='s-card-title'>
                  Keepsake
              </div>
          </div>
          <div className='col-md-3 s-card'>
          <div className='s-card-img'>
                  <img src={s4}/>
              </div>
              <div className='s-card-title'>
                  ezysolare
              </div>
          </div>
        </div>
        </div>
      </div>
      <div className='emerging-startup'>
        <div className='heading'>
          <div className='line'></div>
          <span>Popular Products</span>
          <div className='line'></div>
        </div>
        <div className='p-cards'>
        <div className='container row p-card-inner'>
          <div className='col-md-6 t-card'>
              <div className='t-card-img'>
                  <img src={s1}/>
              </div>
              <div className='t-card-title'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptates similique autem atque exercitationem totam ullam soluta in, modi dicta, sunt ad debitis! Aut numquam illum quasi, id commodi cumque?
              </div>
          </div>
          <div className='col-md-6 t-card'>
          <div className='t-card-img'>
                  <img src={s2}/>
              </div>
              <div className='t-card-title'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptates similique autem atque exercitationem totam ullam soluta in, modi dicta, sunt ad debitis! Aut numquam illum quasi, id commodi cumque?
              </div>
          </div>
          <div className='col-md-6 t-card'>
          <div className='t-card-img'>
                  <img src={s3}/>
              </div>
              <div className='t-card-title'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptates similique autem atque exercitationem totam ullam soluta in, modi dicta, sunt ad debitis! Aut numquam illum quasi, id commodi cumque?
              </div>
          </div>
          <div className='col-md-6 t-card'>
          <div className='t-card-img'>
                  <img src={s4}/>
              </div>
              <div className='t-card-title'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptates similique autem atque exercitationem totam ullam soluta in, modi dicta, sunt ad debitis! Aut numquam illum quasi, id commodi cumque?
              </div>
          </div>
        </div>
        </div>
      </div>

      <div className='explore-section'>
          <button className='explore-btn'>Explore Products</button>
      </div>
    </>
  )
}

export default HomePage