import React from 'react'
import AboutGoals from '../components/AboutGoals'
import IntroItem from '../components/IntroItem'
import { data2 } from '../components/data'

const About = () => {
  return (
    <>
      <section className='w-4/5 mx-auto mt-10 flex flex-col'>
        <div className='awesome'>
          <h1 className='text-2xl md:text-4xl text-coffee_2 font-luki'>
            Anamy Group
          </h1>
          <h3 className='text-lg md:text-xl text-coffee_1 font-luki'>
            Multi Activities Co.Ltd.
          </h3>
        </div>
        <div className='w-full mt-10 gridRes'>
          <div className='flex flex-col items-start'>
            <h1 className='mb-5 text-lg md:text-xl text-coffee_2'>
              Introduction
            </h1>
            <p className='text-coffee_2 text-xs md:text-sm'>
              Anamy for Multi Activities Co.Ltd. was established in 2018 and
              works in the field of various activities, services for foreign
              affairs, packaging and packaging of food products, import and
              export, treatment and study abroad. The company has contracted
              with several companies in different countries, the most important
              of which are Turkey, India and Egypt, and a number of
              international hospitals and the Memorial Hospitals Group in
              Turkey. Anamy has a cooperative staff with a pure youthful spirit.
            </p>
          </div>
          <div className='flex flex-col items-start'>
            <h1 className='mb-5 text-lg md:text-xl text-coffee_2'>المقدمة</h1>
            <p className='text-coffee_2 text-xs md:text-sm'>
              تأسست شركة أنامي للانشطة المتعددة في العام 2018م وتعمل شركة انامي
              للانشطة المتعددة في خدمات شئون الأجانب، تعبئة وتغليف المنتجات
              الغذائية ،الإستيراد والتصدير، العلاج والدراسة بالخارج والداخل .
              تعاقدت الشركة مع عدة شركات في مختلف الدول واهمها تركيا والهند ومصر
              وعدد من المستشفيات العالمية ومجموعة مشافي مموريال بتركيا. تمتلك
              أنامي فريق عمل متعاون يتمتع بروح شبابية خالصة.
            </p>
          </div>
        </div>
      </section>
      <IntroItem data={data2} />
      <AboutGoals />
    </>
  )
}

export default About
