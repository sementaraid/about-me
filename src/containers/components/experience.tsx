import { Fragment } from "react";
import Image from "next/image";

export function Experience(){
  return(
    <Fragment>
      <div className='mb-[30px]'>
        <h2 className='text-4xl font-bold leading-normal text-[#C07F00]'>Experience</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] mb-32'>
        <div className='block order-2 md:order-1'>
          <h3 className='text-2xl mb-4 text-app-typography font-light'>
            April 2019 -  March 2023 <br/>
            <strong className='font-bold'>Icube By Sirclo</strong>
          </h3>
          <p className='text-medium font-medium text-app-typography leading-relaxed mb-[30px]'>
            <strong>About Icube</strong><br/>
            Running own e-commerce site and then extended the expertise, experiences and technology to help other retailers. 
            The team are comprised of the technologists, designers, technical project managers and business strategists. 
            Premier Magento Solutions Partner based on Indonesia
          </p>

          <div className='p-4 bg-[#C07F00] text-white rounded-xl'>
            <h3 className='text-xl mb-3 text-white'>
              Act as <strong>Individual Contributtor</strong>
            </h3>
            <ol className='text-sm list-decimal p-[inherit] m-[inherit] leading-relaxed'>
              <li>Developing and maintain e-commerce site using magento.</li>
              <li>Involved in developing custom checkout page using ReactJs as it’s plugin.</li>
              <li>Involved in developing custom magento 2 storefront using Next Js to replace it’s current frontend</li>
              <li>Self achivement: <br/><strong>Created my own Swift Checkout (Magento 2 Icube Based Ecommerce)</strong></li>
            </ol>
          </div>
        </div>
        <div className='grid gap-3 order-1 md:order-2'>
          <div className='col-span-2 flex justify-center'>
            <Image src={"/image/icube.png"} height={450} width={450} alt='Icube' className='m-auto'/>
          </div>
        </div>
        <div className='md:col-span-2 order-3'>
          <h3 className='text-xl mb-4 text-app-typography'>Some Project That I Contributed In</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-[#ffd95a3d] p-4 rounded-lg flex gap-4 items-center'>
              <Image src={"/image/eiger.png"} height={50} width={50} alt='Eigeradventure'/>
              <p className='text-sm text-app-typography font-semibold'>Eigeradventure</p>
            </div>
            <div className='bg-[#ffd95a3d] p-4 rounded-lg flex gap-4 items-center'>
              <Image src={"/image/yogyaonline.png"} height={50} width={50} alt='Yogyaonilne'/>
              <p className='text-sm text-app-typography font-semibold'>Yogyaonline</p>
            </div>
            <div className='bg-[#ffd95a3d] p-4 rounded-lg flex gap-4 items-center'>
              <Image src={"/image/9to9.png"} height={50} width={50} alt='9to9 Indonesia'/>
              <p className='text-sm text-app-typography font-semibold'>9to9 Indonesia</p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] mb-32'>
        <div className='block order-2'>
          <h3 className='text-2xl mb-4 text-app-typography font-light'>
            March 2023 -  NOW <br/>
            <strong className='font-bold'>HYSN</strong>
          </h3>
          <p className='text-medium font-medium text-app-typography leading-relaxed mb-[30px]'>
            <strong>About HYSN</strong><br/>
            Hysn (Castle in English Translation) is a Singaporean company that focused on DevSecOps Certification<br/>
            <strong>Cloudlabs</strong> is their product, you can access it in <a href='https://portal.practical-devsecops.training/' className='text-[#C07F00]'>here</a><br/>
            They have more than 2000 students and once they complete their exams they will have their own devsecops certificate
          </p>

          <div className='p-4 bg-[#C07F00] text-white rounded-xl'>
            <h3 className='text-xl mb-3 text-white'>
              Act as <strong>Individual Contributtor</strong>
            </h3>
            <ol className='text-sm list-decimal p-[inherit] m-[inherit] leading-relaxed'>
              <li>Developing and maintain cloudlabs using react js.</li>
              <li>Delivering universal customer journey as part of goal in cloudlabs</li>
              <li>Developing Learning Management System as part of cloudlabs</li>
            </ol>
          </div>
        </div>

        <div className='grid gap-3 order-1'>
          <div className='col-span-2 flex justify-center'>
            <Image src={"/image/hysn.png"} height={150} width={150} alt='Icube' className='m-auto'/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}