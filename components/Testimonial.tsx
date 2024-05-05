import React, { useState } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev: any, next: any) => {
      setDocActive(next);
    },

    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "1px solid #F7D449",
              }
            : {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "1px solid #aeaeae",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="text-white bg-[#0F1113] py-20 flex justify-center items-center"
    >
      <div className="w-[500px] md:w-[620px] h-60 px-4">
        <div>
          <Slider {...settings}>
            <div>
              <p className="text-xl text-textColor text-center leading-8">
                <span className="text-white">Genesys Company Manager -</span> During 
                his tenure at Genesis, Enugu, their leadership as a Front-end Developer 
                was transformative. Their work on the School Manager project 
                led to a 20% increase in efficiency and a 30% reduction in administrative 
                workload through developing a web portal. His consistently demonstrated 
                dedication and innovation, making significant contributions to our organization.
              </p>
            </div>
            <div>
              <p className="text-xl text-textColor text-center leading-8">
                <span className="text-white">Clinico Product Owner -</span> During 
                his tenure as our Decentralized Developer, they spearheaded 
                the implementation of a revolutionary blockchain system at Clinico, 
                Enugu. Their expertise led to a 60% reduction in data loss, from 
                40% to 20%. He brought dedication and innovation to the project, 
                setting a new standard for data security in our industry.    
              </p>
            </div>
            <div>
              <p className="text-xl text-textColor text-center leading-8">
                <span className="text-white">Aptech Company Manager -</span> During 
                Nzeh Favour's tenure as Team Lead at Aptech, Enugu, their collaborative 
                efforts led to significant enhancements to our website. Using Adobe XD, 
                they achieved a 12% drop in cart abandonments and a 32% boost in 2022 online 
                sales. His leadership and expertise drove tangible improvements, making a 
                lasting impact on our organization.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
