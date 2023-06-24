import { testimonialsData } from '@/data'
import TestimonyItem from './TestimonyItem'

const Testimonials = () => {
	return (
		<section className='flex flex-col gap-16 px-6 py-16 text-center md:gap-20 md:p-40'>
			<h3 className='font-serif font-black uppercase tracking-[4px] text-grayishBlue'>
				Client Testimonials
			</h3>
			<ul className='grid grid-cols-1 gap-16 md:grid-cols-3 '>
				{testimonialsData.map((item) => (
					<TestimonyItem key={item.id} {...item} />
				))}
			</ul>
		</section>
	)
}
export default Testimonials
