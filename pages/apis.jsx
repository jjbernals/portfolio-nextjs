import Image from 'next/image';
import React from 'react';
import netflixImg from '../public/assets/projects/descarga.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const apis = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={netflixImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>APIs</h2>
          <h3>Java / Spring Boot</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>APIs desarrolladas</h2>
          <p>
            En este repositorio podras encontrar algunas APIs con funcionalidades especificas para funcionar
            en relacion cliente servidor, estas APIs estan desarrolladas en su mayoria con la arquitectura
            de microservicios y cada una de ellas posee test unitarios con un coverage minimo del 90%.
          </p>
          <p>
            Algunos nombres de los repositorios los cuales almacenan estas APIs son: config-server, config-server-account, game
            , y un proyecto full stack el cual contiene una API en su interior llamado laravel-react-full-stack.
          </p>
          <a
            href='https://github.com/jjbernals?tab=repositories'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Repositorio</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tecnologias</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Java
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Spring Boot
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Docker
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Apache Kafka
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Volver</p>
        </Link>
      </div>
    </div>
  );
};

export default apis;
