import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";

function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" width={90} height={70} />
    </Link>
  );
}

export default Logo;
