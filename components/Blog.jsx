import Image from "next/image"
import image404 from "../public/hero/not-found.png"
const BlockPage = () => {
    return (
        <>
        <div className="flex justify-center items-center h-[68vh]">
        <span className="text-2xl font-bold text-primary">Coming Soon!</span>
        {/* <Image src={image404} alt="blogimg"/> */}
        </div>
        </>
    )
}

export default BlockPage