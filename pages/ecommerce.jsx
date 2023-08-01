import Image from 'next/image';
import React from 'react';
import cryptoImg from '../public/assets/projects/ecommerce.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const ecommerce = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={cryptoImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>E-commerce</h2>
          <h3>React JS / Tailwind </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>E-Commerce</h2>
          <p>
            Bienvenido a mi proyecto destacado en el campo del desarrollo web! En esta
            sección de mi portafolio, te presento con orgullo el e-commerce de comida que
            desarrollé utilizando React y otras tecnologías de vanguardia.
          </p>
          <p>
            El diseño limpio y atractivo de este e-commerce hace que los productos alimenticios
            sean los protagonistas. Utilicé React para construir componentes interactivos, lo que
            permite a los usuarios explorar y filtrar el catálogo de delicias culinarias de manera fluida y amigable.

          </p>
          <a
            href='https://github.com/jjbernals/dashboard-store-v1'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Repositorio</button>
          </a>
          <a
            href='https://e-commerce-one-snowy.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tecnologias</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
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

export default ecommerce;
