import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            Conoceme
          </p>
          <h2 className='py-4'>¿Quien soy yo?</h2>
          <p className='py-2 text-gray-600'>
            Soy un desarrollador con experiencia en el uso de varios frameworks tales como
            Spring Boot, ReactJs, Laravel
            . Me considero una persona apasionada por la tecnología y
            el aprendizaje continuo, lo que me ha llevado a adquirir habilidades en diferentes
            áreas de la programación y a estar siempre en búsqueda de nuevos retos y oportunidades
            para seguir creciendo como profesional.
          </p>
          <p className='py-2 text-gray-600'>
            Me apasiona aprender nuevas tecnologías y entiendo que hay
            más de una manera de realizar una tarea.
            Aunque soy más competente en la creación de
            aplicaciones back-end usando Java, SpringBoot, Php y Laravel,
            aprendo rápido y puedo aprender nuevas pilas tecnológicas según sea necesario. Creo
            que ser un gran desarrollador no es usar un lenguaje específico, sino elegir la mejor
            herramienta para el trabajo.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Mira algunos de mis últimos proyectos.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
