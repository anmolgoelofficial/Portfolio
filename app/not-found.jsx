import React from "react";
import Image from "next/image";
import image404 from "../public/hero/not-found.png"

const Notfound = () => {
    return (
        <div className="flex justify-center">

       <Image src={image404} alt="nofound404" height={500}  />

        </div>
    )
}
export default Notfound;

