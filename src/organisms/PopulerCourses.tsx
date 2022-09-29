import { Typography } from '@mui/material';
import CardThumbNail from '../components/common/cards/cardthumbnails/cardthumbnails';
import Slider from 'react-slick';
import React, { useEffect, useState } from 'react';
import { AiFillRightCircle, AiFillLeftCircle } from 'react-icons/ai';

export default function PopulerCourses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/courses')
      .then((res) => res.json())
      .then((response) => {
        setCourses(response);
      });
  }, []);

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'black' }}
        onClick={onClick}
      >
        <AiFillRightCircle />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'black' }}
        onClick={onClick}
      >
        <AiFillLeftCircle />
      </div>
    );
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Typography variant="h5" component="h5">
        Students are viewing
      </Typography>
      <Slider {...carouselSettings}>
        {courses.map((course) => {
          return <CardThumbNail course={course}></CardThumbNail>;
        })}
      </Slider>
    </>
  );
}
