import React from 'react'
import Slider from "react-slick";
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import './collection.css'


const Collection = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        slidesToScroll: 4,
    initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <>
          <h2 className='mt-20 mb-[5px] text-center text-4xl font-semibold font-archivo text-black11 leading-[43px]'>Top Collections</h2>
          <p className='mb-10 text-center text-base font-normal font-archivo text-second leading-6'>Express your style with our standout collection—fashion meets sophistication.</p>
        <Slider {...settings}>
          <div>
            <div className='relative img'>
            <img className='w-full px-3 rounded-[30px]' src="images/col_1.png" alt="" />
            <Link className='link font-archivo'>Dresses</Link>
            </div>
          </div>
          <div>
            <div className='relative img'>
            <img className='w-full px-3 rounded-[30px]' src="images/col-2.png" alt="" />
            <Link className='link font-archivo'>Top T-Shirt</Link>
            </div>
          </div>
          <div>
            <div className='relative img'>
            <img className='w-full px-3 rounded-[30px]' src="images/col_3.png" alt="" />
            <Link className='link font-archivo'>Blazers</Link>
            </div>
          </div>
          <div>
            <div className='relative img'>
            <img className='w-full px-3 rounded-[30px]' src="images/col_4.png" alt="" />
            <Link className='link font-archivo'>Shirts</Link>
            </div>
          </div>
          <div>
            <div className='relative img'>
            <img className='w-full px-3 rounded-[30px]' src="images/col_5.png" alt="" />
            <Link className='link font-archivo'>Sweaters</Link>
            </div>
          </div>
        </Slider>
    </>
  )
}

export default Collection