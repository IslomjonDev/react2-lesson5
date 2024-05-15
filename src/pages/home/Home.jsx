import React from 'react'
import './Home.css'
import home from '../../assets/home.png'
import { useGetProductsQuery } from '../../context/productsApi'
import about from '../../assets/qzil.png'
import about2 from '../../assets/about2.png'
import ayfon from '../../assets/ayfon.png'
import xz from '../../assets/xz.png'
import why1 from '../../assets/why1.png'
import why2 from '../../assets/why2.png'
import why3 from '../../assets/why3.png'
import { Link } from 'react-router-dom'

const Home = () => {
  let { data , isLoading } = useGetProductsQuery({limit:12})
  let products = data?.products?.map(el =>  <div key={el.id} className="card">
       <div className="img">
        <Link to={`/product/${el?.id}`}>
            <p>Sale !</p>
          <img src={el.images[0]} alt="" />
        </Link>
          </div>
      <p>{el.title}</p>
  </div>)

  return (
    <>
     <div className="container">
         <div className="home">
           <div className="home-left">
              <h2>Mobile</h2>
              <h1>Backcover Tempered Glass </h1>
              <button>Shop all !</button>
           </div>
           <div className="home-right">
              <img src={home} alt="" />
           </div>
         </div>
         {isLoading ?  
          <div className="loading">
            <div className="loading-card">
            <div className="loading-cards">
            </div>
            <div className="loading-text">
              
            </div>
            </div>
            <div className="loading-card">
            <div className="loading-cards">
            </div>
            <div className="loading-text">
              
            </div>
            </div>
            <div className="loading-card">
            <div className="loading-cards">
            </div>
            <div className="loading-text">
              
            </div>
            </div>
            <div className="loading-card">
            <div className="loading-cards">
            </div>
            <div className="loading-text">
              
            </div>
            </div>
          </div> : 
         <div className="wrapper">
               {products}
         </div>
            }
         <div className="about">
            <div className="about__title">
               <img src={about} alt="" />
               <p>about us</p>
               <h1>If you’re looking for a Premium Quality Tempered Glass or Back-cover for your Device </h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
            <img src={about2} alt="" />
         </div>
            <div className="pading">
            <div className="shop">
             <div className="shop-left">
               <h1>Shop Premium <br /> Tempered Glass in wholesale Price !</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
               <h3>LKR : 299</h3>
               <button>Shop Tempered Glass </button>
             </div>
             <div className="shop-right">
                 <img src={ayfon} alt="" />
                 <img className='xz' src={xz} alt="" />
             </div>
         </div>
            </div>
            <div className="why">
            <div className="why-title">
               <img src={about} alt="" />
               <p>Why Choose Us</p>
            </div>
              <div className="why-cards">
                <div className="why-card">
                  <img src={why1} alt="" />
                   <h1>Fast Delivery</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="why-card">
                  <img src={why2} alt="" />
                   <h1>Cheap Price</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="why-card">
                  <img src={why3} alt="" />
                   <h1>Premium Quality</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
     </div>
    </>
  )
}

export default Home

