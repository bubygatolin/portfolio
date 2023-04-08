import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center mt-4'>
      <div className='max-w-[1240px] w-full h-full mx-auto  p-2 flex justify-center items-center'>
        <div className='mt-70'>
          <h2 className='uppercase text-sm tracking-widest text-gray-600 mt-60 '>Consultoria pessoa física e jurídica</h2>
          <h1 className='py-4 text-gray-700'>
            Sou, <span className='text-[#5651e5]' >Carolina Chimirri</span>
          </h1>
          <h1 className='py-2 text-gray-700'>
            Advogada
          </h1>
          <p className='py-4 text-gray-600 max-w[70%] m-auto'>
            Atuação no Direito consultivo, preventivo e contencioso na área do Consumidor, Cível, Família e Sucessões e Trabalhista.
            Apresentação de reclamações, manifestações, ativas e passivas perante o Procon e agências reguladoras, acompanhando os processos administrativos e providenciando o devido cumprimento às orientações dos órgãos.
            Execução de serviços registrais e notariais, elaboração de defesas, petições iniciais, recursos, impugnações, manifestações diversas, audiências, sustentação oral, despachos e protocolos em todas as instâncias e tribunais.
            Atendimento consultivo, elaboração, análise e revisão de contratos, entre outras atividades na esfera judicial e extrajudicial.Atuação no Direito consultivo, preventivo e contencioso na área do Consumidor, Cível, Família e Sucessões e Trabalhista. Apresentação de reclamações, manifestações, ativas e passivas perante o Procon e agências reguladoras, acompanhando os processos administrativos e providenciando o devido cumprimento às orientações dos órgãos. Execução de serviços registrais e notariais, elaboração de defesas, petições iniciais, recursos, impugnações, manifestações diversas, audiências, sustentação oral, despachos e protocolos em todas as instâncias e tribunais. Atendimento consultivo, elaboração, análise e revisão de contratos, entre outras atividades na esfera judicial e extrajudicial.
            Competências: Direito de família · Direito das sucessões · Dupla cidadania · Direito imobiliário · Redação jurídica · Direito do consumidor · Direito civil · Direito processual civil · Direito contratual
          </p>
          <div className='flex items-center justify-between max-w[330px] m-auto py-4'>
          <a
              href='https://www.linkedin.com/in/carolina-chimirri-5b5230185/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedin />
              </div>
            </a>
            <a
              href='/#contact'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>
            <a
              href='/#sobre'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </a>
            <a
              href='https://www.instagram.com/carolfchimirri/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaInstagram />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main