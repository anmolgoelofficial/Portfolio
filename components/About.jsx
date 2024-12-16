import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, Home, Languages, Code, Database, Cloud, LineChart, Award } from 'lucide-react'

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Anmol Goel',
    
  },
  {
    icon: <PhoneCall size={20} />,
    text: '(+91) 9034583704',
    
  },
  {
    icon: <MailIcon size={20} />,
    text: 'anmolgoelcs717@gmail.com',
    
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on 19 Jan, 2000',
    
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Master of Computer Application',
    
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Sector 20 , Chandigarh, India',
    
  },
  
];

const LangSkill = [
  {
    icon: <Languages  size={20} />,
    text: 'Advanced : Hindi, English',
    
  },
  {
    icon: <Home size={20} />,
    text: 'Native : Hindi',
    
  }
]

const Skill = [
  {
    icon: <Code  size={20} />,
    text: 'Python (Pandas, NumPy, SciPy, Matplotlib)',
    
  },
  {
    icon: <Database size={20} />,
    text: 'MS SQL Server',
    
  },
  {
    icon: <Cloud size={20} />,
    text: 'AWS',
    
  },
  {
    icon: <LineChart size={20} />,
    text: 'PowerBI, Tableau, MS Excel (Pivot Table, VLOOKUP, VBA, Macro)',
    
  },
  {
    icon: <Award size={20} />,
    text: 'Google Data Analytics Professional Certificate, IBM Data Analyst Professional Certificate',
  },
]

const  qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Maharaja Agrasen Himalayan Garhwal University Pauri',
        qualification: 'Master of Computer Application (MCA)',
        years: '2021 - 2023'
      },
      {
        university: 'Maharaja Agrasen Himalayan Garhwal University Pauri',
        qualification: 'Bachelor Of Computer Application (BCA)',
        years: '2018 - 2021'
      },
      {
        university: 'The Punjab Public School Nabha',
        qualification: 'Class 12 (PCB)',
        years: '2017 - 2018'
      }
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Shine Dezign Infonet Pvt. Ltd',
        role: 'Web Designer',
        location : "Chandigarh",
        years: 'September 2023 - Present'
      },
      // {
      //   company: 'Cognifyz Technologies',
      //   role: 'PowerBI Intern',
      //   years: 'Nov 2023 - Dec 2023'
      // },
      // {
      //   company: 'CodSoft',
      //   role: 'Data Scientist Internship',
      //   years: 'Sep 2023 - Oct 2023'
      // },
    ],
  },
];
const skillData = [
  {
    title: 'Skills' ,
    data: [
      {
        name: '● Language: Python, Java'
      },
      {
        name: '● Databases: MySQL, PostgreSQL, NoSQL'
      },
      {
        name: '● Cloud: MS Azure, Google Cloud Platform, AWS'
      },
      {
        name: '● Visualization Tool: Excel, Tableau, Power BI, QlikView, Alteryx'
      },
    ],
  },
  {
    title: 'Tools' ,
    data: [
      {
        imgPath: '/about/python.svg'
      },
      {
        imgPath: '/about/sql.svg'
      },
      {
        imgPath: '/about/aws.svg'
      },
      {
        imgPath: '/about/powerbi.svg'
      },
      {
        imgPath: '/about/tableau.svg'
      },
      {
        imgPath: '/about/excel.svg'
      },
    ],
  },
]
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return <section className="xl:h-[860px] pb-12 xl:py-24">
    <div className="container mx-auto">
      <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
      <div className="flex flex-col xl:flex-row">
      <div className="hidden xl:flex flex-1 relative">
        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/hero/Profile.png' />
      </div>
      <div className="flex-1">
        <Tabs defaultValue="personal">
          <TabsList className='w-full grid xl:grid-cols-3 shadow-md xl:max-w-[520px] xl:border dark:border-none'>
            <TabsTrigger className='w-[162px] xl:w-auto' value="personal">Personal Info</TabsTrigger>
            <TabsTrigger className='w-[162px] xl:w-auto' value="qualification">Qualifications</TabsTrigger>
            <TabsTrigger className='w-[162px] xl:w-auto' value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="text-lg mt-12 xl:mt-8">
            <TabsContent value="personal">
              <div className="text-center xl:text-left">
                <h3 className="h3 mb-4">Skilled in collecting, organizing, interpreting, and disseminating statistical figures.</h3>
                <p className="subtitle max-w-xl mx-auto xl:mx-0">Analytical pro in dashboard eval, KPI dev, Excel. Proficient in SQL, Python, Tableau, with growing AI, product analytics expertise. Strong collaborator, interdisciplinary.</p>
                <div className="grid xl:grid-cols-2 gap-4 mb-7">
                  {infoData.map((item, index) => {
                    return (
                      <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                      <div className="text-primary">{item.icon}</div>
                      <div>{item.text}</div>
                      </div>
                    )
                  })}
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="text-primary">Language Skill</div>
                  <div className="border-b border-border"></div>
                  {LangSkill.map((item, index) => {
                    return (
                      <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                      <div className="text-primary">{item.icon}</div>
                      <div>{item.text}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="qualification">
              <div>
                <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey
                </h3>
                <div className="grid md:grid-cols-2 gap-y-8">
                <div className="flex flex-col gap-y-6">
                  <div className="flex gap-x-4 items-center text-[22px] text-primary">
                    <Briefcase />
                    <h4 className="capitalize font-medium">
                      {getData(qualificationData,'experience').title}
                    </h4>
                  </div>
                  <div className="flex flex-col gap-y-8">
                  {getData(qualificationData,'experience').data.map(
                    (item, index) => {
                      const { company, role, years, location } = item;
                      return (
                        <div className='flex gap-x-8 group' key={index}>
                          <div className="h-[84px] w-[1px] bg-border relative ml-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                          </div>
                          <div>
                          <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                          <div className="flex justify-between">
                          <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                          <div className="text-lg leading-none text-muted-foreground mb-4">{location}</div>
                          </div>
                          <div className="text-base font-medium">{years}</div>
                        </div>
                        </div>
                      )
                    }
                  )}
                  </div>
                </div>
                <div  className="flex flex-col gap-y-6">
                  <div className="flex gap-x-4 items-center text-[22px] text-primary">
                    <GraduationCap size={28}/>
                    <h4 className="capitalize font-medium">
                      {getData(qualificationData,'education').title}
                    </h4>
                  </div>
                  <div className="flex flex-col gap-y-8">
                  {getData(qualificationData,'education').data.map(
                    (item, index) => {
                      const { university, qualification, years } = item;
                      return (
                        <div className='flex gap-x-8 group' key={index}>
                          <div className="h-[84px] w-[1px] bg-border relative ml-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                          </div>
                          <div>
                          <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                          <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                          <div className="text-base font-medium">{years}</div>
                        </div>
                        </div>
                      )
                    }
                  )}
                  </div>
                </div>
              </div>
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <div className="text-center xl:text-left">
                <h3 className="h3 mb-8"> Tools I Use Everyday</h3>
                <div className="mb-16">
                  <h4 className="text-xl font-semibold mb-2">
                    Skills
                  </h4>
                  <div className="border-b border-border mb-4"></div>
                  <div className="flex flex-col gap-y-2">
                    
                  {Skill.map((item, index) => {
                    return (
                      <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                      <div className="text-primary">{item.icon}</div>
                      <div>{item.text}</div>
                      </div>
                    )
                  })}
                </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 xl:text-left">
                    Tools
                  </h4>
                  <div className="border-b border-border mb-4"></div>
                  <div className="flex gap-x-8 justify-center xl:justify-start">
                    {getData(skillData,'Tools').data.map((item, index) => {
                      const { imgPath } = item;
                      return (
                        <div key ={index}>
                          <Image
                          src={imgPath}
                          width={48}
                          height={48}
                          alt=""
                          priority 
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
    </div>
  </section>;
}

export default About
