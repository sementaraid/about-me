import { Fragment } from "react";
import Image from "next/image";

export function Invested () {
  return(
    <Fragment>
      <h2 className='text-4xl font-bold leading-normal text-[#C07F00]'>Interest</h2>
      <p className='text-app-typography'>What i have been invested myself in:</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
        <div className='flex items-center gap-4 p-4 rounded-lg bg-[#ffd95a3d]'>
          <Image src={"/image/totaltypescript.png"} width={40} height={40} alt='Totaltypescript'/>
          <p className='text-sm text-app-typography font-semibold'>Total Typescript</p>
        </div>
        <div className='flex items-center gap-4 p-4 rounded-lg bg-[#ffd95a3d]'>
          <Image src={"/image/testingjavascript.png"} width={30} height={30} alt='Testingjavascript'/>
          <p className='text-sm text-app-typography font-semibold'>Testing Javascript</p>
        </div>
        <div className='flex items-center gap-4 p-4 rounded-lg bg-[#ffd95a3d]'>
          <Image src={"/image/react.png"} width={50} height={50} alt='Epic React Dev'/>
          <p className='text-sm text-app-typography font-semibold'>Epic React Dev</p>
        </div>
      </div>
    </Fragment>
  );
}