import Image from 'next/image'
import Link from 'next/link'

const StandOut = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2'>
			<div>
				<Image
					src={'/images/mobile/image-stand-out.jpg'}
					alt=''
					height={312}
					width={375}
					className='block w-full md:hidden'
				/>
				<Image
					src={'/images/desktop/image-stand-out.jpg'}
					alt=''
					height={600}
					width={720}
					className='hidden w-full md:block'
				/>
			</div>
			<div className='flex flex-col items-center gap-8 px-6 py-16 text-center md:items-start md:gap-10 md:px-40 md:pt-40 md:text-left'>
				<div className='flex flex-col gap-6 md:gap-8'>
					<h2 className='max-w-sm font-serif text-[32px] font-black text-veryDarkDesaturatedBlue md:text-[40px] md:leading-[44px]'>
						Stand out to the right audience
					</h2>
					<p className='max-w-sm text-lg text-darkGrayishBlue'>
						Using a collaborative formula of designers, researchers,
						photographers, videographers, and copywriters, we’ll build and
						extend your brand in digital places.
					</p>
				</div>
				<div className='group relative'>
					<Link
						href={'#'}
						className='font-serif uppercase tracking-[1px] text-veryDarkDesaturatedBlue'>
						Learn More
					</Link>
					<div className='absolute -left-2 bottom-0 -z-10 h-[10px] w-[137px] rounded-3xl bg-softRed/25 duration-500 ease-out group-hover:bg-softRed' />
				</div>
			</div>
		</div>
	)
}
export default StandOut
