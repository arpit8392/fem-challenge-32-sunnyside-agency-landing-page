import './globals.css'
import { Barlow, Fraunces } from 'next/font/google'

const barlow = Barlow({
	subsets: ['latin'],
	weight: '600',
	variable: '--font-barlow',
})

const fraunces = Fraunces({
	subsets: ['latin'],
	weight: ['700', '900'],
	variable: '--font-fraunces',
})

export const metadata = {
	title: 'Sunnyside Agency Landing Page',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${barlow.variable} ${fraunces.variable} font-sans`}>
				{children}
			</body>
		</html>
	)
}
