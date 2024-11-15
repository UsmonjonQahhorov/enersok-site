import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { RouterConfig } from '@/configs/router.config';
import type { PageType } from '@/types/component.types';
import Image from 'next/image';
import Factory from '@public/facroty.png';
import Employee from '@public/employee.png';
import { Paragraph } from '@/components/ui/Paragraph';
import { EmployeeCard } from '@/components/ui/EmployeeCard';

const OrganizationalStructurePage: PageType = () => {
	return (
		<>
			<section className="bg-backgroundImage1 relative">
				<Container className="pt-[104px] sm:pt-[164px] lg:pb-5 relative z-10">
					<Breadcrumbs
						textHome={'Main'}
						textPage={'Organizational structure'}
						urlHome={RouterConfig.Home}
						urlPage={RouterConfig.OrganizationalStructure}
					/>
					<Heading className="!leading-[normal] text-secondary uppercase py-8 lg:py-[75px] text-[32px] lg:text-[100px]">
						Organizational structure
					</Heading>
				</Container>
				<Image
					src={Factory}
					alt="Banner Enersok"
					className="absolute hidden lg:block bottom-0 right-[122px]"
					priority={true}
				/>
			</section>
			<section>
				<Container>
					<Paragraph
						className="text-sm md:text-2xl w-full border-b-[1px] border-solid border-secondaryOpacity3 whitespace-[10px] pt-[50px] pb-6 lg:py-[50px] text-secondary"
					>
						Construction period started in March 2023 and the COD (Commercial
						Operating Date) should be reach in June 2026. That means the plant
						will be fully operational with two gas turbines and one steam
						turbine in combined cycle configuration.
					</Paragraph>
					<div className="pt-20 pb-[50px] md:py-[100px]">
						<Heading
							as="h3"
							className="!leading-[normal] text-secondary uppercase text-[32px] lg:text-[64px] lg:max-w-[50%] pb-8 md:pb-16"
						>
							Senior Management and Manager
						</Heading>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-12 md:gap-y-14">
							<EmployeeCard
								image={{
									width: Employee.width,
									height: Employee.height,
									url: Employee.src,
									name: 'Employee',
								}}
								name={'Regis Chancel'}
								job={'CEO'}
							/>
							<EmployeeCard
								image={{
									width: Employee.width,
									height: Employee.height,
									url: Employee.src,
									name: 'Employee',
								}}
								name={'Lola'}
								job={'Secretary General'}
							/>
							<EmployeeCard
								image={{
									width: Employee.width,
									height: Employee.height,
									url: Employee.src,
									name: 'Employee',
								}}
								name={'Masuyo Yo'}
								job={'CEO'}
							/>
							<EmployeeCard
								image={{
									width: Employee.width,
									height: Employee.height,
									url: Employee.src,
									name: 'Employee',
								}}
								name={'Emrah Ipekci'}
								job={'HSES Director'}
							/>
							<EmployeeCard
								image={{
									width: Employee.width,
									height: Employee.height,
									url: Employee.src,
									name: 'Employee',
								}}
								name={'Regis Chancel'}
								job={'CEO'}
							/>
							<EmployeeCard
								image={{
									width: Employee.width,
									height: Employee.height,
									url: Employee.src,
									name: 'Employee',
								}}
								name={'Lola'}
								job={'Secretary General'}
							/>
							<EmployeeCard
								image={{
									width: Employee.width,
									height: Employee.height,
									url: Employee.src,
									name: 'Employee',
								}}
								name={'Masuyo Yo'}
								job={'CEO'}
							/>
							<EmployeeCard
								image={{
									width: Employee.width,
									height: Employee.height,
									url: Employee.src,
									name: 'Employee',
								}}
								name={'Emrah Ipekci'}
								job={'HSES Director'}
							/>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
};

export default OrganizationalStructurePage;
