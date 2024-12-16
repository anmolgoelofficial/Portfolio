'use client'
import Link from "next/link";
import { Button } from "./ui/button"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'

// import { pagination } from 'swiper/modules'

import ProjectCard from '@/components/ProjectCard';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module

const projectData = [
  {
    image: '/work/1.png',
    category: 'Data Analysis',
    name: 'FPI Report and Nifty Indices',
    link: '#',
  },
  {
    image: '/work/2.png',
    category: 'Data Science',
    name: 'Heart Disease Diagnostic Analysis',
    link: '#',
  },
  {
    image: '/work/3.png',
    category: 'Data Analysis',
    name: 'Data Exploration and Summery',
    link: '#'
  },
  {
    image: '/work/4.png',
    category: 'Data Analysis',
    name: 'Gender Based Analysis',
    link: '#',
  },
  {
    image: '/work/5.png',
    category: 'Data Analysis',
    name: 'Objective Analysis',
    link: '#',
  },
  {
    image: '/work/6.png',
    category: 'Data Analysis',
    name: 'Investment Duration and Frequency',
    link: '#',
  },
  {
    image: '/work/7.png',
    category: 'Data Analysis',
    name: 'Reason Of Investment',
    link: '#',
  },
  {
    image: '/work/8.png',
    category: 'Data Analysis',
    name: 'Source of Information',
    link: '#',
  },
  {
    image: '/work/9.png',
    category: 'Data Analysis',
    name: 'Combine Insights into a Dashboard',
    link: '#',
  },
  {
    image: '/work/10.png',
    category: 'Data Analysis',
    name: 'Amazon Sales Data Analysis',
    link: '#',
  },
  {
    image: '/work/11.png',
    category: 'Data Science',
    name: 'Titanic Survival Predication',
    link: '#',
  },
  {
    image: '/work/12.png',
    category: 'Data Science',
    name: 'IRIS Flower Classification',
    link: '#',
  },
  {
    image: '/work/13.png',
    category: 'Data Science',
    name: 'Sales Prediction',
    link: '#',
  },
  {
    image: '/work/14.png',
    category: 'MERN',
    name: 'Kryptox',
    link: '#',
  },
  {
    image: '/work/15.png',
    category: 'MERN',
    name: 'FindR',
    link: '#',
  },



]
const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">Empowering insights, shaping futures. Our latest project in data analysis, science, and engineering drives innovation at the speed of data.</p>
          <Link href='/projects'><Button>All projects</Button></Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          {/* <Swiper
            className="h-[480px]"
            slidesPerView={2}
            spaceBetween={30}
            modules={[Pagination, Autoplay]} // Add Autoplay module here
            autoplay={{
              delay: 3000, // Delay between slides in milliseconds (3 seconds)
              disableOnInteraction: false, // Autoplay won't stop after user interaction
            }}
            pagination={{ clickable: false }}
          >
            {projectData.slice(0, 15).map((project, index) => { // Fixed typo here: .slice(0.4) is incorrect
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper> */}

          <Swiper
            className="h-[480px]"
            spaceBetween={30}
            modules={[Pagination, Autoplay]} // Add Autoplay module here
            autoplay={{
              delay: 3000, // Delay between slides in milliseconds (3 seconds)
              disableOnInteraction: false, // Autoplay won't stop after user interaction
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              // When the viewport width is less than or equal to 640px (mobile)
              640: {
                slidesPerView: 1, // Show 1 slide
              },
              // When the viewport width is greater than or equal to 641px (tablet or larger screens)
              641: {
                slidesPerView: 2, // Show 2 slides
              },
              // You can add more breakpoints for larger screens if needed
              1024: {
                slidesPerView: 2, // Example: Show 3 slides on larger screens
              },
            }}
          >
            {projectData.slice(0, 15).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>

        </div>
      </div>
    </section>
  );
}

export default Work