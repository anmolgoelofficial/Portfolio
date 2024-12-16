'use client'
import React , { useState } from 'react';
import { Tabs , TabsList , TabsContent , TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

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
      link: '#',
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

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];



const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [ category, setCategory ] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects'
    ? project
    : project.category === category;
  });
  return ( 
  <section className='min-h-screen pt-12'>
    <div className="container mx-auto">
      <h2 className="section-title mb-8 xl:16 text-center mx-auto">My Projects</h2>
<Tabs defaultValue={category} className='mb-24 xl:mb-48'>
  <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
    {categories.map((category, index) => {
      return (
      <TabsTrigger 
      onClick={() =>setCategory(category)}
      value={category} 
      key={index}
      className='capitalize w-[162px] md:w-auto'
      >
        {category}
      </TabsTrigger>
      )
    })}
  </TabsList>
  <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
    {filteredProjects.map((project, index) => {
      return (
        <TabsContent value = {category} key = {index}>
          <ProjectCard project={project} />
        </TabsContent>
      )
    })}
  </div>
</Tabs>
    </div>
  </section>
  );
}

export default Projects