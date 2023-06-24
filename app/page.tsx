import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ImageGallery from '@/components/ImageGallery'
import Testimonials from '@/components/Testimonials'

export default function Home() {
	return (
		<main className=''>
			<Header />
			<Features />
			<Testimonials />
			<ImageGallery />
			<Footer />
		</main>
	)
}
