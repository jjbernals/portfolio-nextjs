import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/game2.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const gamestore = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={propertyImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Game Store</h2>
          <h3>React JS / Tailwind</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Proyecto Game Store</h2>
          <p className="mt-2">
            El proyecto de Game Store fue una emocionante experiencia de desarrollo en
            la que tuve la oportunidad de aplicar mis habilidades como desarrollador utilizando
            tecnologías modernas como React y Tailwind CSS. La idea detrás del proyecto
            era crear una plataforma atractiva e intuitiva que permitiera a los
            entusiastas de los videojuegos comprar y disfrutar de sus títulos favoritos en línea.
          </p>
          <p>
            Este proyecto me proporcionó valiosas lecciones y experiencia en el desarrollo con tecnologías
            frontend como React y el uso de bibliotecas CSS como Tailwind. Aprendí a optimizar la experiencia del
            usuario, implementar funciones avanzadas y mantener un enfoque en la seguridad y protección de datos.
          </p>
          <a
            href='https://github.com/jjbernals/online-video-games-store'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Repositorio</button>
          </a>
          <a
            href='https://property-finder-development.web.app/gamestore.jsx'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tecnologias</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
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

export default gamestore;
