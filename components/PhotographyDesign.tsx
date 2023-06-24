import clsx from 'clsx'

const features = [
	{
		id: 1,
		legend: 'design',
		title: 'Graphic Design',
		description:
			'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
	},
	{
		id: 2,
		legend: 'photography',
		title: 'Photography',
		description:
			'Great design makes you memorable. We deliver artwork that underscores your brand message and capture potential clients’ attention.',
	},
]

const PhotographyDesign = () => {
	return (
		<ul className='grid grid-cols-1 md:grid-cols-2'>
			{features.map((feature) => (
				<li
					key={feature.id}
					className={clsx(
						'h-[600px] bg-cover bg-center bg-no-repeat',
						feature.legend === 'design' &&
							'bg-mobileDesign md:bg-desktopDesign',
						feature.legend === 'photography' &&
							'bg-mobilePhotography md:bg-desktopPhotography'
					)}>
					<div className='flex flex-col items-center gap-7 px-6 pt-96 text-center'>
						<h3
							className={clsx(
								'font-serif text-3xl font-black',
								feature.legend === 'design' && 'text-[#24554A]',
								feature.legend === 'photography' && 'text-darkBlue'
							)}>
							{feature.title}
						</h3>
						<p className='max-w-xs text-[#24554A]'>{feature.description}</p>
					</div>
				</li>
			))}
		</ul>
	)
}
export default PhotographyDesign
