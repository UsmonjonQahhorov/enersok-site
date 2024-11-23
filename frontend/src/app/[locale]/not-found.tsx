import { Heading } from '@/components/ui/Heading';

// TODO: Better 404 page
export default function NotFound() {
	return (
		<div className="h-[100vh] text-center">
			<Heading className="text-red-600 text-center my-auto">
				LOCALE NOT FOUND
			</Heading>
		</div>
	);
}
