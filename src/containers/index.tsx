import { Open_Sans } from 'next/font/google'
import { Container } from '@/components/custom/container'
import { Header } from '@/components/custom/header'
import { ThemeSwitcher } from '@/components/custom/theme-switcher'
import { Intro } from '@/containers/components/intro'
import { Experience } from '@/containers/components/experience'
import { Tools } from '@/containers/components/tools'
import { Invested } from '@/containers/components/invested'
import Image from 'next/image'
import { Footer } from '@/components/custom/footer'


const OPEN_SANS = Open_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] })

export default function Pages() {
  return (
    <div className={OPEN_SANS.className}>
      <Header className='w-full justify-end md:justify-between'>
        <Container className='m-auto w-full justify-end'>
          <ThemeSwitcher/>
        </Container>
      </Header>
      <Container className='flex flex-col-reverse m-auto justify-between items-center h-[800px] md:h-[700px] mt-16 md:mt-0'>
        <Intro/>
      </Container>
      <Container className='md:flex md:flex-col m-auto min-h-[700px]'>
        <Experience/>
      </Container>
      <Container className='md:flex md:flex-col m-auto min-h-[300px]'>
        <Tools/>
      </Container>
      <Container className='md:flex md:flex-col m-auto flex-col min-h-[400px]'>
        <Invested/>
      </Container>
      <Footer/>
    </div>
  )
}
