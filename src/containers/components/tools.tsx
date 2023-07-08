import { Fragment } from "react";
import Image from "next/image";

export function Tools () {
  return(
    <Fragment>
      <h2 className='text-4xl font-bold leading-normal text-[#C07F00]'>Tools And Technologies</h2>
      <p className='text-app-typography'>There are some tools and technologies that i have been working with</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
        <div className='flex items-center gap-4 p-4 rounded-lg bg-[#ffd95a3d]'>
          <Image src={"/image/git.png"} width={70} height={70} alt='Git'/>
          <p className='text-sm text-app-typography font-semibold'>Git</p>
        </div>
        <div className='flex items-center gap-4 p-4 rounded-lg bg-[#ffd95a3d]'>
          <Image src={"/image/graphql.png"} width={50} height={50} alt='Graphql'/>
          <p className='text-sm text-app-typography font-semibold'>Graphql</p>
        </div>
        <div className='flex items-center gap-4 p-4 rounded-lg bg-[#ffd95a3d]'>
          <Image src={"/image/react.png"} width={50} height={50} alt='React Js'/>
          <p className='text-sm text-app-typography font-semibold'>React JS</p>
        </div>
        <div className='flex items-center gap-4 p-4 rounded-lg bg-[#ffd95a3d]'>
          <Image src={"/image/magento.png"} width={40} height={30} alt='Magento 2'/>
          <p className='text-sm text-app-typography font-semibold'>Magento 2 Frontend</p>
        </div>
        <div className='flex items-center gap-4 p-4 rounded-lg bg-[#ffd95a3d]'>
          <Image src={"/image/nextjs.png"} width={40} height={30} alt='Magento 2'/>
          <p className='text-sm text-app-typography font-semibold'>Next JS</p>
        </div>
      </div>
    </Fragment>
  );
}