import React from 'react'

const AboutIntro = () => {
  return (
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
            Anamy for Multi Activities Co.Ltd. was established in 2018 and works
            in the field of various activities, services for foreign affairs,
            packaging and packaging of food products, import and export,
            treatment and study abroad. The company has contracted with several
            companies in different countries, the most important of which are
            Turkey, India and Egypt, and a number of international hospitals and
            the Memorial Hospitals Group in Turkey. Anamy has a cooperative
            staff with a pure youthful spirit.
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
      <div className='w-full mt-20 gridRes'>
        <div className='h-36 flex flex-col boxShadow p-3 rounded cursor-pointer transition duration-500 hover:bg-coffee_3'>
          <h1 className='text-lg md:text-xl mb-3 text-coffee_2'>Vision</h1>
          <p className='text-xs md:text-sm text-coffee_2'>
            To become a global leader in providing the best services.
          </p>
        </div>
        <div className='h-36 flex flex-col boxShadow p-3 rounded cursor-pointer transition duration-500 hover:bg-coffee_3'>
          <h1 className='text-lg md:text-xl mb-3 text-coffee_2'>الــرؤيـــة</h1>
          <p className='text-xs md:text-sm text-coffee_2'>
            أن تصبح شركة أنامي رائـــدة عالميآ في تقديم أفضل الخدمات
          </p>
        </div>
      </div>

      <div className='w-full mt-20 gridRes'>
        <div className='h-36 flex flex-col boxShadow p-3 rounded cursor-pointer transition duration-500 hover:bg-coffee_3'>
          <h1 className='text-lg md:text-xl mb-3 text-coffee_2'>Message</h1>
          <p className='text-xs md:text-sm text-coffee_2'>
            The tireless pursuit of creating a stimulating environment to
            provide the best services, optimal employment of skills, creativity
            in developing solutions and building an effective local and global
            partnership
          </p>
        </div>
        <div className='h-36 flex flex-col boxShadow p-3 rounded cursor-pointer transition duration-500 hover:bg-coffee_3'>
          <h1 className='text-lg md:text-xl mb-3 text-coffee_2'>الرســالــة</h1>
          <p className='text-xs md:text-sm text-coffee_2'>
            السعي الدؤوب لأيجاد بيئة محفزة لتقديم أفضل الخدمات والتوظيف الأمثل
            للمهارات والإبداع في وضع الحلول وبناء شراكة محلية وعالمية فاعلة
          </p>
        </div>
      </div>

      <div className='w-full mt-20 gridRes'>
        <div className='h-36 flex flex-col boxShadow p-3 rounded cursor-pointer transition duration-500 hover:bg-coffee_3'>
          <h1 className='text-lg md:text-xl mb-3 text-coffee_2'>Values</h1>
          <p className='text-xs md:text-sm text-coffee_2'>
            Loyalty, belonging, cooperation, team spirit, creativity, respect,
            transparency and accountability.
          </p>
        </div>
        <div className='h-36 flex flex-col boxShadow p-3 rounded cursor-pointer transition duration-500 hover:bg-coffee_3'>
          <h1 className='text-lg md:text-xl mb-3 text-coffee_2'>قيمـــنا</h1>
          <p className='text-xs md:text-sm text-coffee_2'>
            الــولاء والإنتماء والتعاون وروح الفريقو والإبداع والإحترام و
            الشفافية والمساءلة.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro
