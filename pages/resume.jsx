import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>John | Resume</title>
        <meta
          name='description'
          content='I’m apis front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />

      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>John Bernal</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/jjbernals/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/jjbernals'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Desarrollador Java <span className='px-1'>|</span> Desarrollador Web{' '}
              <span className='px-1'>|</span> Pruebas unitarias
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Soy un desarrollador Java con experiencia en el uso del framework Spring Boot
           ,ReactJs y laravel Framework. Me considero una persona apasionada por la tecnología y el
          aprendizaje continuo, lo que me ha llevado a adquirir habilidades en diferentes áreas
          de la programación y a estar siempre en búsqueda de nuevos retos y oportunidades para seguir
          creciendo como profesional.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Habilidades</h5>
          <p className='py-2'>
            <span className='font-bold'>Habilidades tecnicas</span>
            <span className='px-2'>|</span>Java
            <span className='px-2'>|</span> Spring Boot
            <span className='px-2'>|</span>Contenedores
            <span className='px-2'>|</span>Microservicios
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Pruebas Unitarias
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Patrones de diseño
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Experiencia
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Globant
            </span>
            <span className='px-2'>|</span>Ibagué, Colombia
          </p>
          <p className='py-1 italic'>Desarrollador Java / Tma (Mayo 2022 - Julio 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Desarrollador Java utilizando el framework de Spring Boot para el desarrollo de APIs
            </li>
            <li>
              Factorización de código según estándares, implementación de patrones de diseño,
            </li>
            <li>
              Desarrollo de pruebas unitarias, implementación de contenedores y herramientas Cloud,
            </li>
            <li>
              Implementación de medidas de seguridad.
            </li>
            <li>
              Desarrollo de aplicaciones basadas en Microservicios
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Educacion
        </h5>
      
        {/* Education */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>SENA</span>
            <span className='px-2'>|</span>Ibagué, Colombia
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Tecnológo en análisis y desarrollo de sistemas de informacion
            </li>
            <li>
              Curso especial en diseño y desarrollo de front-end con html 5 Css y JavaScript
            </li>
            <li>
              Curso especial en adopcion de estrategias de ciberseguridad para proteccion de la informacion
            </li>
            <li>
              Curso especial en ingles Nivel 1, 2, 3
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Universidad Cooperativa de Colombia</span>
            <span className='px-2'>|</span>Ibagué, Colombia
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ingenieria de Sistemas - Quinto Semestre
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
