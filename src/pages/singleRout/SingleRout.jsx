import React from 'react'
import './SingleRout.css'
import star from '../../assets/Star.png'
import { CiHeart } from "react-icons/ci";
import { useGetDetailProductQuery } from '../../context/productsApi';
import { useParams } from 'react-router';



const SingleRout = () => {

  let {id} = useParams()
  let {data , isLoading} = useGetDetailProductQuery(id)


  return (
    <>
    {isLoading ? <div className="container">
      <div className="loading">
        <div className="images__leadings">
            <div className="images__loading"></div>
            <div className="images__loading"></div>
            <div className="images__loading"></div>
            <div className="images__loading"></div>
        </div>
        <div className="image__loading">
        </div>
        <div className="text__loading">
           <div className="h1__loading"> </div>
           <div className="h1__loading"> </div>
           <div className="h1__loading"> </div>
           <div className="h1__loading"> </div>
           <div className="h1__loading"> </div>
           <div className="h1__loading"> </div>

        </div>
      </div>
    </div> : 
    
    <div className="container">
      <div className="single">
        <div className="single-content">
            <div className="single__images">
                <div className="single-imgcard">
                   <img src={data?.images[0]} alt="" />
                </div>
              <div className="single-imgcard">
              <img src={data?.images[1]} alt="" />

                  </div>
                  <div className="single-imgcard">
                  <img src={data?.images[2]} alt="" />

                  </div>
                  <div className="single-imgcard">
                  <img src={data?.images[3]} alt="" />

                  </div>
            </div>
            <div className="single__img">
                  <img src={data?.images[0]} alt="" />
            </div>
            <div className="single-parag">
                <h1>{data?.title}</h1>
                <span>
                  <img src={star} alt="" />
                  <p>({data?.stock} Reviews)</p>
                  <p>In Stock</p>
                </span>
                <h2>${data?.price}.00</h2>
                <p className='bbp'>{data?.description}</p>
                <span className='size-btns'>
                   <p>Size : </p>
                   <button>XS</button>
                   <button>S</button>
                   <button>M</button>
                   <button>L</button>
                   <button>XL</button>
                </span>
                <span className='mt'>
                    <div className="inc-dec">
                        <button>-</button>
                        <p>2</p>
                        <button>+</button>
                    </div>
                    <button className='buy'>Buy Now</button>
                    <CiHeart className='heart' />
                </span>

            </div>
        </div>
      </div>
    </div> 

 }
    </>
  )
}

export default SingleRout
