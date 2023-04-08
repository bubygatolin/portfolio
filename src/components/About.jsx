import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../../public/assets/sobre.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 mt-40'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 ' >
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Sobre</p>
          <h2 className='py-4'>Quem Sou</h2>
          <p className='py-2 text-gray-600'>
          Advogada com vasta experiência no Consultivo e Contencioso, Direito Civil, Família e Sucessões, Direito Imobiliário, Direito do Consumidor, Recuperação de Crédito, Direito Processual Civil, conhecimento em Direito Penal e Trabalhista. Excelente redação jurídica, prática em lidar com órgãos públicos das mais diferentes esferas providenciando o cumprimento de ordens judiciais dentro do prazo legal e em consonância com a lei aplicável.
          </p>
          <p className='py-2 text-gray-600'>
          Bons conhecimentos em tecnologias, experiência com ferramentas analíticas, pesquisa online e sistemas de peticionamento eletrônico. Vivência na Europa pelo período de dois anos, desenvolvendo Inglês e Espanhol avançados e Italiano intermediário. Forte habilidade interpessoal e organizacional, sólida ética de trabalho e julgamento impecável, foco em alcançar as melhores medidas judiciais e extrajudiciais bem como na prevenção e resolução de problemas intercorrentes para obtenção do mais alto nível de resultados. Excelentes habilidades investigativas e analíticas, grande atenção aos detalhes, experiência em em ambientes multiculturais e de ritmo acelerado e disposição para aprender e desenvolver novas habilidades constantemente. Flexível e capaz de se adaptar às novas circunstâncias. Disponível para viagens de trabalho.
          </p>
          
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;