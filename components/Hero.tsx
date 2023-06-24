import Image from 'next/image'
import DownArrow from '@/public/images/icon-arrow-down.svg'

const Hero = () => {
	return (
		<section className='flex flex-col items-center justify-center gap-14 px-6 py-20 md:gap-24'>
			<h1 className='text-center font-serif text-[40px] font-black uppercase tracking-[6.25px] md:text-[56px] md:tracking-[8.75px]'>
				We are creatives
			</h1>
			<Image
				src={DownArrow}
				alt=''
				className='w-auto md:animate-bounce object-contain'
			/>
		</section>
	)
}
export default Hero
