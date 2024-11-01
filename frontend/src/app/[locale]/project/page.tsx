import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import type { PageType } from '@/types/component.types';
import Image from 'next/image';
import Factory from '@public/facroty.png';
import Factory2 from '@public/factory2.png';
import Project1 from '@public/project-icons/project1.svg';
import Project2 from '@public/project-icons/project2.svg';
import Project3 from '@public/project-icons/project3.svg';
import Project4 from '@public/project-icons/project4.svg';
import Project5 from '@public/project-icons/project5.svg';
import Project6 from '@public/project-icons/project6.svg';
import Project7 from '@public/project-icons/project7.svg';
import Project8 from '@public/project-icons/project8.svg';
import Afs1 from '@public/project-icons/afs1.svg';
import Afs2 from '@public/project-icons/afs2.svg';
import Banner from '@public/project.png';
import Banner2 from '@public/project2.png';
import Location from '@public/location-green.svg';
import { RouterConfig } from '@/configs/router.config';
import EmblaCarousel from '@/components/navigation/EmblaSlider/EmblaSlider';

const ProjectDetailsPage: PageType = () => {
    return (
        <>
            <section className='bg-backgroundImage1 relative overflow-hidden'>
                <Container className='pt-[164px] pb-11 grid grid-cols-2'>
                    <div>
                        <Breadcrumbs
                            textHome={'Main'}
                            textPage={'Project Details'}
                            urlHome={RouterConfig.Home}
                            urlPage={RouterConfig.ProjectDetails}
                        />
                        <Heading className='!leading-[normal] text-secondary uppercase pt-[75px] pb-[50px] text-[100px]'>
                            Syrdarya  2
                        </Heading>
                        <div className='pb-12 border-b-[1px] border-solid border-secondaryOpacity3'>
                            <Heading as='h4' className='text-lg text-secondary font-semibold pb-11'>Project Period:</Heading>
                            <div className='flex flex-col gap-y-4'>
                                <div className='flex flex-row items-center gap-x-6'>
                                    <div className='flex flex-row items-center w-fit py-[10] pl-3 pr-6 gap-x-3 bg-button1 rounded-[38px]'>
                                        <span className='w-[6px] h-[6px] bg-white rounded-full' />
                                        <Paragraph className='text-lg text-white tracking-[2px]'>Phase 1</Paragraph>
                                    </div>
                                    <Paragraph className='text-2xl text-secondary'>Construction period : 2023 – 2026</Paragraph>
                                </div>
                                <div className='pl-3 flex'>
                                    <span className='w-6 h-[1px] bg-secondaryOpacity3 rotate-90' />
                                </div>
                                <div className='flex flex-row items-center gap-x-6'>
                                    <div className='flex flex-row items-center w-fit py-[10] pl-3 pr-6 gap-x-3 bg-primary rounded-[38px]'>
                                        <span className='w-[6px] h-[6px] bg-white rounded-full' />
                                        <Paragraph className='text-lg text-white tracking-[2px]'>Phase 2</Paragraph>
                                    </div>
                                    <Paragraph className='text-2xl text-secondary'>Opearating period : 2026-2051</Paragraph>
                                </div>
                            </div>
                        </div>
                        <div className='pt-11'>
                            <Heading as='h4' className='text-lg text-secondary font-semibold pb-9'>Project Location:</Heading>
                            <div className='flex flex-row gap-x-6 items-center pb-20'>
                                <div className='bg-white rounded-full min-w-[60px] h-[60px] flex items-center justify-center'>
                                    <Image
                                        src={Location}
                                        alt='Icon Enersok'
                                        className='w-[26px] h-auto'
                                    />
                                </div>
                                <Paragraph className='text-lg text-secondary'>So called Syrdarya 2 will be located in Bayaut district, Syrdarya region, approximately 150 km south of Tashkent.</Paragraph>
                            </div>
                        </div>
                    </div>
                    <div className='relative z-10 pl-14'>
                        <Image
                            src={Banner}
                            alt='Careers Banner Enersok'
                            className='object-cover object-center rounded-xl h-full'
                            priority={true}
                        />
                    </div>
                </Container>
                <Image
                    src={Factory}
                    alt="Banner Enersok"
                    className='absolute bottom-0 right-[-200px] z-[1]'
                    priority={true}
                />
            </section>
            <section>
                <Container className='py-40'>
                    <Heading as='h3' className='text-secondary text-6xl uppercase pb-11'>About Project</Heading>
                    <Paragraph className='text-2xl text-secondary pr-[20%] pb-[95px]'>Construction period started in March 2023 and the COD (Commercial Operating Date) should be reach in June 2026. That means the plant will be fully operational with two gas turbines and one steam turbine in combined cycle configuration. ENERSOK has selected an EPC contractor (Harbin Electric International Company Limited) to deliver  the engineering  design  of the facility, to procure all equipment and to build all temporary and permanent facilities of the project. The EPC contractor was selected through a competitive tender process from five international EPC Contractors considering financial, technical and E&S qualifications.</Paragraph>
                    <EmblaCarousel
                        showCounter={false}
                        slidesToShow={3}
                        slides={[
                            <Image
                                src={Banner}
                                alt='Slide Enersok'
                                className='max-h-[321px] w-full rounded-xl'
                            />,
                            <Image
                                src={Banner}
                                alt='Slide Enersok'
                                className='max-h-[321px] w-full rounded-xl'
                            />,
                            <Image
                                src={Banner}
                                alt='Slide Enersok'
                                className='max-h-[321px] w-full rounded-xl'
                            />,
                            <Image
                                src={Banner}
                                alt='Slide Enersok'
                                className='max-h-[321px] w-full rounded-xl'
                            />,
                            <Image
                                src={Banner}
                                alt='Slide Enersok'
                                className='max-h-[321px] w-full rounded-xl'
                            />,
                            <Image
                                src={Banner}
                                alt='Slide Enersok'
                                className='max-h-[321px] w-full rounded-xl'
                            />,
                        ]}
                    />
                </Container>
            </section>
            <section className='bg-backgroundImage1 relative overflow-hidden'>
                <Container className='grid grid-cols-2 gap-x-32 pt-[150] pb-[83px]'>
                    <div>
                        <Paragraph className='text-secondary text-6xl uppercase'>The main project facilities will include:</Paragraph>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-x-14 items-start pb-6 border-b-[1px] border-solid border-secondaryOpacity3'>
                            <Image
                                src={Project1}
                                alt='Project1 Enersok'
                            />
                            <Paragraph className='text-secondary text-2xl'>Power block and stacks including two Gas Turbines (GT), two Heat Recovery Steam Generators (HRSG) and one Steam Turbine (ST)</Paragraph>
                        </div>
                        <div className='flex flex-row gap-x-14 items-start py-6 border-b-[1px] border-solid border-secondaryOpacity3'>
                            <Image
                                src={Project2}
                                alt='Project1 Enersok'
                            />
                            <Paragraph className='text-secondary text-2xl'>Closed Loop Cooling Water system, with mechanical draft air cooling tower blocks</Paragraph>
                        </div>
                        <div className='flex flex-row gap-x-14 items-start py-6 border-b-[1px] border-solid border-secondaryOpacity3'>
                            <Image
                                src={Project3}
                                alt='Project1 Enersok'
                            />
                            <Paragraph className='text-secondary text-2xl'>Gas receiving terminal</Paragraph>
                        </div>
                        <div className='flex flex-row gap-x-14 items-start py-6 border-b-[1px] border-solid border-secondaryOpacity3'>
                            <Image
                                src={Project4}
                                alt='Project1 Enersok'
                            />
                            <Paragraph className='text-secondary text-2xl'>Access road</Paragraph>
                        </div>
                        <div className='flex flex-row gap-x-14 items-start py-6 border-b-[1px] border-solid border-secondaryOpacity3'>
                            <Image
                                src={Project5}
                                alt='Project1 Enersok'
                            />
                            <Paragraph className='text-secondary text-2xl'>Intake and outfall corridor to a surface water canal, known as the YG Canal</Paragraph>
                        </div>
                        <div className='flex flex-row gap-x-14 items-start py-6 border-b-[1px] border-solid border-secondaryOpacity3'>
                            <Image
                                src={Project6}
                                alt='Project1 Enersok'
                            />
                            <Paragraph className='text-secondary text-2xl'>Wastewater treatment plants (industrial and sanitary)</Paragraph>
                        </div>
                        <div className='flex flex-row gap-x-14 items-start py-6 border-b-[1px] border-solid border-secondaryOpacity3'>
                            <Image
                                src={Project7}
                                alt='Project1 Enersok'
                            />
                            <Paragraph className='text-secondary text-2xl'>Ancillary/support facilities (i.e. electrical system, site entrance and security building)</Paragraph>
                        </div>
                        <div className='flex flex-row gap-x-14 items-start py-6 border-b-[1px] border-solid border-secondaryOpacity3'>
                            <Image
                                src={Project8}
                                alt='Project1 Enersok'
                            />
                            <Paragraph className='text-secondary text-2xl'>500/220kv switchgear station shared with and being constructed by the adjacent ACWA Power Syrdarya 1,500MW CCGT Power Plant </Paragraph>
                        </div>
                    </div>
                </Container>
                <Image
                    src={Factory2}
                    alt='Factory2 Enersok'
                    className='left-[0] bottom-0 absolute'
                />
            </section>
            <section>
                <Container className='py-[220px] grid grid-cols-2 gap-x-20'>
                    <div>
                        <Heading as='h3' className='text-[64px] text-secondary uppercase !leading-[normal] pb-[60px]'>Associated Facilities (AFs) will be limited to the following:</Heading>
                        <div>
                            <div className='flex flex-row gap-x-7 pb-[38px] border-b-[1px] border-solid border-secondaryOpacity3'>
                                <div className='flex min-w-12 h-12 items-center justify-center bg-primary rounded-xl'>
                                    <Image
                                        src={Afs1}
                                        alt='AFs1 Enersok'
                                        className=''
                                    />
                                </div>
                                <Paragraph className='text-2xl text-secondary'>1 km gas pipeline connection to an existing gas supply system to be constructed by NEGU (or its appointed contractor) and operated by the gas supplier, JSC Uztransgaz.</Paragraph>
                            </div>
                            <div className='flex flex-row gap-x-7 pt-7'>
                                <div className='flex min-w-12 h-12 items-center justify-center bg-button1 rounded-xl'>
                                    <Image
                                        src={Afs2}
                                        alt='AFs1 Enersok'
                                        className=''
                                    />
                                </div>
                                <Paragraph className='text-2xl text-secondary'>1 km gas pipeline connection to an existing gas supply system to be constructed by NEGU (or its appointed contractor) and operated by the gas supplier, JSC Uztransgaz.</Paragraph>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full rounded-xl'>
                        <Image
                            src={Banner2}
                            alt='Project Banner2 Eneksok'
                            className='object-cover object-center w-full h-full rounded-xl'
                        />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ProjectDetailsPage;