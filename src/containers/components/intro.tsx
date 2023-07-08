import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Fragment } from "react";

export function Intro(){
  return(
    <Fragment>
      <div className='my-16 md:mt-0 md:flex md:items-center'>
        <div className='block'>
          <h1 className='text-5xl leading-tight'>
            <strong className='text-app-typography font-light'>
              Hi There,<br />
              I am <span className='text-[#C07F00] font-bold'>Herlina Sunaryanto</span>
            </strong>
          </h1>
          <p className='my-3 text-2xl font-semibold text-app-typography'>Frontend Developer</p>
          <p className='my-3 text-medium font-medium text-app-typography leading-relaxed'>
            I am a Frontend Developer from Yogyakarta.<br />
            I have over 4 years of working experience
          </p>
          <Button className='bg-[#C07F00] rounded-[5px] text-md text-white font-semibold mt-16'>
            My Journey
          </Button>
        </div>
      </div>
      <div className='relative h-[300px] w-[300px]'>
        <div className='h-[300px] w-[300px] flex items-end rounded-[45px] bg-[#ffd95a3d] rotate-[0deg] overflow-hidden absolute z-[2] bottom-[10px] md:right-[50px]' />
        <div className='h-[300px] w-[300px] flex items-end rounded-[45px] bg-[#ffd95a95] rotate-[10deg] overflow-hidden absolute z-[2] bottom-[10px] md:right-[50px]' />
        <div className='h-[300px] w-[300px] flex items-end rounded-[45px] bg-[#FFD95A] rotate-[25deg] overflow-hidden absolute z-[3] bottom-[10px] md:right-[50px]'>
          <Image src={"/image/profile.png"} height={500} width={500} alt='' className='rotate-[-25deg] object-cover w-[auto] h-[390px] bottom-[-35px] right-0 left-[0px] absolute' />
        </div>
      </div>
    </Fragment>
  );
}