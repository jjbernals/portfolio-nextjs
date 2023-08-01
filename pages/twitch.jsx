import Image from 'next/image';
import React from 'react';
import twitchImg from '../public/assets/projects/twitch.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const twitch = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={twitchImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Twitch UI</h2>
          <h3>Next JS / Tailwind / Next Auth</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Proyecto UI Twitch</h2>
          <p>
            Esta aplicación se creó con NEXT.JS y tiene un estilo con
            CSS viento de cola. La aplicación está alojada estáticamente usando Vercel.
            Esta es una recreación móvil sensible de Twitch.tv y características
            Next/Auth.js para la autenticación. Los usuarios pueden optar por ser
            autenticado con una cuenta de Github o una cuenta de Google. A
            algunas características a tener en cuenta con este proyecto son imágenes de carga diferida usando
            el componente de imagen, el enrutamiento integrado y el contexto siguiente/autenticación.
          </p>
          <a
            href='https://github.com/jjbernals/project-Twitch'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Repositorio</button>
          </a>
          <a
              href='https://twitch-nextjs-tailwind.vercel.app/'
              target='_blank'
              rel='noreferrer'
              className="ml-4"
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tecnologias</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next Auth
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Github Auth
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google Auth
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

export default twitch;
