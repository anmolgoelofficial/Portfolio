import Link from "next/link";
import { Button } from "./ui/button";
import { Download , Send, BriefcaseBusiness  } from "lucide-react";


import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from 'react-icons/ri';

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
  <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
    <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
       <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Data Analyst</div>
            <h1 className='h1'>Namaste, I am Anmol Goel</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Experienced data analyst proficient in extracting insights from complex datasets, driving data-driven decisions with advanced analytical skills and strategic thinking.</p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                <Link href='#'>
                <Button className="gap-x-2 shadow-xl">Hire Me  <Download size={18} />
                </Button>
                </Link>
                <Link href='#'>
                <Button variant='secondary' className="gap-x-2 shadow-xl">Online CV  <BriefcaseBusiness size={18} />
                </Button>
                </Link>
            </div>
            <Socials 
            containerStyles='flex gap-x-6 mx-auto xl:mx-0'
            iconsStyles= 'text-foreground text-[22px] hover:text-primary transaction all' />
        </div> 
       <div className='hidden xl:flex relative'>
        {/* <Badge
        containerStyles ='absolute top-[24%] -left-[5rem]' 
        icon={<RiBriefcase4Fill />} 
        endCountNum={1}
        badgeText='Years Of Experience'
        />
        <Badge
        containerStyles ='absolute top-[80%] -left-[5rem]' 
        icon={<RiBriefcase4Fill />} 
        endCountNum={1}
        badgeText='Years Of Experience'
        /> */}
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'>
            <DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/Profile.png'
            />
            </div>
        
            </div>
       </div>
       <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
        <RiArrowDownSLine className="text-3xl text-primary"/>
    </div>
    </div>
  </section>
  );
}

export default Hero
