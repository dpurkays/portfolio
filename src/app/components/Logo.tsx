import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";

function Logo() {
  return (
    <Link href="/">
      <div className="flex gap-2 items-center">
        <Image src={logo} alt="logo" width={40} height={40} />
        <div className="text-accent1 font-bold text-xl md:text-2xl hover:text-accent2">{`<Dula P />`}</div>
      </div>
    </Link>
  );
}

export default Logo;
