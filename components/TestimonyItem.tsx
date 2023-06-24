import Image from 'next/image'

const TestimonyItem = ({ image, author, position, testimony }: Testimonial) => {
	return (
		<li className='flex flex-col items-center justify-between gap-8 md:gap-20'>
			<figure className='flex flex-col items-center gap-8 md:gap-14'>
				<Image
					src={`/images/${image}`}
					alt={author}
					height={72}
					width={72}
					className='rounded-full object-contain'
				/>
				<figcaption className='max-w-sm text-lg text-veryDarkGrayishBlue'>
					{testimony}
				</figcaption>
			</figure>
			<div className='flex flex-col gap-2'>
				<h4 className='font-serif text-lg font-black text-veryDarkDesaturatedBlue'>
					{author}
				</h4>
				<p className='text-sm text-grayishBlue'>{position}</p>
			</div>
		</li>
	)
}
export default TestimonyItem
