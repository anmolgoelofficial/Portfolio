import React from "react";
// import Error from "../404.mp4";
import Image from "next/image";
// import Video from "next-video";
// import NotfoundVideo from "./404.mp4";
// import startedvideo from "../public/hero/video";
import image404 from "../public/hero/not-found.png"

const Notfound = () => {
    return (
        <div className="flex justify-center">
            {/* with the normal video tag from html */}
           {/* <video autoPlay width={"100px"} height={"200px"} preload="none">
           <source src={NotfoundVideo} type="video/mp4" />
           </video> */}
           {/* using the nest js video tag */}
           {/* <Video src={startedvideo}/> */}
{/* 
           <video autoPlay loop muted width="100%" height="auto">
                <source src="public/hero/video" type="video/mp4" />
                Your browser d
                oes not support the video tag.
            </video> */}

       <Image src={image404} alt="nofound404" height={500}  />

        </div>
    )
}
export default Notfound;

// import React from "react";
// import Image from "next/image";  // Import Image component for optimization

// const Notfound = () => {
//     return (
//         <div className="container-fluid">
//             {/* Replace the video with an image */}
//             <Image 
//                 src="/not-found.jpg" // Path to your image in the public folder
//                 alt="Not Found"       // Alt text for accessibility
//                 width={1200}           // Set desired width
//                 height={800}           // Set desired height
//                 layout="responsive"    // Makes the image responsive
//             />
//         </div>
//     );
// };

// export default Notfound;
