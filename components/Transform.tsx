import Image from 'next/image'
import Link from 'next/link'

const Transform = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2'>
			<div className='md:order-1'>
				<Image
					src={'/images/mobile/image-transform.jpg'}
					alt=''
					height={312}
					width={375}
					className='block w-full md:hidden'
				/>
				<Image
					src={'/images/desktop/image-transform.jpg'}
					alt=''
					height={600}
					width={720}
					className='hidden w-full md:block'
				/>
			</div>
			<div className='flex flex-col items-center gap-8 px-6 py-16 text-center md:items-start md:gap-10 md:px-40 md:pt-40 md:text-left'>
				<div className='flex flex-col gap-6 md:gap-8'>
					<h2 className='max-w-sm font-serif text-[32px] font-black text-veryDarkDesaturatedBlue md:text-[40px] md:leading-[44px]'>
						Transform your brand
					</h2>
					<p className='max-w-sm text-lg text-darkGrayishBlue'>
						We are a full-service creative agency specializing in helping brands
						grow fast. Engage your clients through compelling visuals that do
						most of the marketing for you.
					</p>
				</div>
				<div className='group relative'>
					<Link
						href={'#'}
						className='font-serif uppercase tracking-[1px] text-veryDarkDesaturatedBlue'>
						Learn More
					</Link>
					<div className='absolute -left-2 bottom-0 -z-10 h-[10px] w-[137px] rounded-3xl bg-yellow/25 duration-500 ease-out group-hover:bg-yellow' />
				</div>
			</div>
		</div>
	)
}
export default Transform
