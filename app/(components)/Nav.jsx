import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TaskPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-default-text">legend77@gmail.com</p>
        <div className="border border-white rounded-full">
          <Image
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            width={17}
            height={17}
            alt="random user image"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
