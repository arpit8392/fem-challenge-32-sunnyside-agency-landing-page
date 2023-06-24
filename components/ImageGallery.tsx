import Image from 'next/image'

const images = [
	'image-gallery-milkbottles.jpg',
	'image-gallery-orange.jpg',
	'image-gallery-cone.jpg',
	'image-gallery-sugar-cubes.jpg',
]

const ImageGallery = () => {
	return (
		<section className='grid grid-cols-2 md:grid-cols-4'>
			{images.map((image, index) => (
				<picture key={index}>
					<Image
						src={`/images/mobile/${image}`}
						alt=''
						width={188}
						height={188}
						className='block w-full md:hidden'
					/>
					<Image
						src={`/images/desktop/${image}`}
						alt=''
						width={360}
						height={447}
						className='hidden w-full md:block'
					/>
				</picture>
			))}
		</section>
	)
}
export default ImageGallery
