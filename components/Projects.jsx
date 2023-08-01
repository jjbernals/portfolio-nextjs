import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Game from '../public/assets/projects/game.jpg';
import cryptoImg from '../public/assets/projects/ecommerce.png'
import netflixImg from '../public/assets/projects/api.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Proyectos
        </p>
        <h2 className='py-4'>Mis desarrollos</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Game Store'
            backgroundImg={Game}
            projectUrl='/gamestore'
            tech='React JS'
          />
          <ProjectItem
            title='E-commerce'
            backgroundImg={cryptoImg}
            projectUrl='/ecommerce'
            tech='React JS'

          />
          <ProjectItem
            title='APIs'
            backgroundImg={netflixImg}
            projectUrl='/apis'
            tech='Spring Boot'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
