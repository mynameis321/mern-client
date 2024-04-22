
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
// import './BookCards.css';
// import '../home/BannerCard.css';
const BookCards = ({headline, bookss}) => {
    console.log(bookss);
    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(500);
    const prependNumber = useRef(1);
    // Create array with 500 slides
    const [slides, setSlides] = useState(
      Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
    );
  
    const prepend = () => {
        setSlides([
          `Slide ${prependNumber.current - 2}`,
          `Slide ${prependNumber.current - 1}`,
          ...slides,
        ]);
        prependNumber.current = prependNumber.current - 2;
        swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
      };
    
      const append = () => {
        setSlides([...slides, 'Slide ' + ++appendNumber.current]);
      };
    
      const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 0);
      };
   
   
  return (
    
    <>
 
    <div className='my-16 px-4 lg:px-24'>
    <h2 className='text-5xl text-center font-bold my-5' style={{ color: '#4d4d4d' }}>{headline}</h2>

    </div>
    <div>
    {/* cards-Virtual slides */}
    <div style={{    width: "100%",
    height: "100%",

    position: "relative",
    height: "100%",
     background: "#eee",
     fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
     fontSize: "14px",
     color: "#000",
     margin: "0",
     padding: 0
    }}>
    <Swiper   // style={{width:"100%", height:"100%"}}
    style={{
        width: "100%",
        height: "350px",
        margin: "20px auto"
  }}
      
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        // className="mySwiper  "
      
      >
       {
   bookss.map((bookss) => (
                <SwiperSlide key={bookss._id}>
                    <Link to="/">
                        <div style={{
                               textAlign: "center",
                               fontSize: "18px",
                               background: "#fff",

                            
                               display: "flex",
                               justifyContent: "center",
                               alignItems: "center"
                        }}>
                        <div style={{
                              display: "block",
                              width:  "100%",
                              height: "100%",
                              objectFit: "cover",

                        }} >
                            <img  src={bookss.imageURl} alt="" style={{  backgroundSize: "cover"}}/>
                        </div>
                        <div>
                            <h3>{bookss.bookTitle}</h3>
                        </div>
                        </div>
                    </Link>
                </SwiperSlide>
            ))
        } 
      
</Swiper>
      
      <p className="append-buttons" 
      style={{
        textAlign: "center",
        marginTop: "20px"
      }}>
        <button onClick={() => prepend()} className="prepend-2-slides"
        style={{
            display: "inlineBlock",
            cursor: "pointer",
            border:" 1px solid #007aff",
            color:" #007aff",
            textDecoration: "none",
            padding: "4px 10px",
            borderRadius: "4px",
            margin: "0 10px",
            fontSize: "13px",
        }}>
          Prepend 2 Slides
        </button>
        <button onClick={() => slideTo(1)} className="prepend-slide"
            style={{
                display: "inlineBlock",
                cursor: "pointer",
                border:" 1px solid #007aff",
                color:" #007aff",
                textDecoration: "none",
                padding: "4px 10px",
                borderRadius: "4px",
                margin: "0 10px",
                fontSize: "13px",
            }}>
          Slide 1
        </button>
        <button onClick={() => slideTo(250)} className="slide-250"
            style={{
                display: "inlineBlock",
                cursor: "pointer",
                border:" 1px solid #007aff",
                color:" #007aff",
                textDecoration: "none",
                padding: "4px 10px",
                borderRadius: "4px",
                margin: "0 10px",
                fontSize: "13px",
            }}>
          Slide 250
        </button>
        <button onClick={() => slideTo(500)} className="slide-500"    style={{
            display: "inlineBlock",
            cursor: "pointer",
            border:" 1px solid #007aff",
            color:" #007aff",
            textDecoration: "none",
            padding: "4px 10px",
            borderRadius: "4px",
            margin: "0 10px",
            fontSize: "13px",
        }}>
          Slide 500
        </button>
        <button onClick={() => append()} className="append-slides"    style={{
            display: "inlineBlock",
            cursor: "pointer",
            border:" 1px solid #007aff",
            color:" #007aff",
            textDecoration: "none",
            padding: "4px 10px",
            borderRadius: "4px",
            margin: "0 10px",
            fontSize: "13px",
        }}>
          Append Slide
        </button>
      </p>
      </div>


      </div>
      </>
  );
}


export default BookCards
