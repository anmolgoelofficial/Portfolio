import { FilePieChart , FlaskConical , LineChart} from 'lucide-react';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const serviceData = [
    {
        icon : <FilePieChart size ={72} strokeWidth={0.8} />,
        title : 'Data Analysis',
        description : 'Comprehensive data analysis services, including exploration, visualization, predictive modeling, and insights for decision-making.'
    },
    {
        icon : <FlaskConical size ={72} strokeWidth={0.8} />,
        title : 'A/B Testing',
        description : 'Facilitated with A/B testing services to optimize strategies by comparing effectiveness and making data-driven recommendations.'
    },
    {
        icon : <LineChart size ={72} strokeWidth={0.8} />,
        title : 'Performance Tracking & Reporting',
        description : 'Provide Performance Tracking and Reporting services, monitoring KPIs and generating insightful reports for decision-making.'
    },

]
const Services = () => {
  return <section className='mb-12 xl:mb-36'>
            <div className="container mx-auto">
                <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto"> MyServices</h2>
                <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                    {serviceData.map((item, index) => {
                        return (
                            <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                                <CardHeader className='text-primary absolute -top-[60px]'>
                                    <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                                        {item.icon}
                                        </div>
                                </CardHeader>
                                <CardContent className='text-center'>
                                    <CardTitle className='mb-4'>{item.title}
                                    </CardTitle>
                                    <CardDescription className='text-lg'>
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
  </section>;
  
}

export default Services