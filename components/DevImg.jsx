import Image from "next/image"

const DevImg = ({containerStyles, imgSrc}) => {
  return <div className={`${containerStyles}`}>
    <div >
    <Image className="!h-[402px] !w-[402px] mx-auto pt-8 pr-5 rounded-full" src={imgSrc} fill priority alt=""/>
    </div>
    </div>
  
}

export default DevImg