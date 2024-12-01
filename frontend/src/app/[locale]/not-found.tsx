import Picture404 from '@public/404.webp';
import NextImage from 'next/image';

export default function NotFound() {
	return (
		<section className="text-center relative">
			<NextImage
				src={Picture404}
				alt="404"
				className="mx-auto w-full h-full"
				quality={100}
			/>
		</section>
	);
}
