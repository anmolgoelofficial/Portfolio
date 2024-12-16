import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return <Link href= '/'>
    <Image src='/logo.jpg' width={50} height={50} priority alt="Anmol's Logo"/>
  </Link>;
};

export default Logo