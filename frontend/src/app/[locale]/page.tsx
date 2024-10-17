import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import type { PageType } from '@/types/component.types';

const DashboardPage: PageType = async () => {

	return (
		<section>
			<Heading>Dashboard Home page</Heading>
			<Paragraph>Welcome</Paragraph>
		</section>
	);
};

export default DashboardPage;
