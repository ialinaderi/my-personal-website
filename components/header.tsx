import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <nav className="bg-black/70 backdrop-blur-xl backdrop:saturate-200 flex w-full z-50 py-3 px-5 fixed">
            <div className="flex flex-1 items-center">
                <Link href="/aaa">
                    <div className="cursor-pointer center flex">
                        <Image
                            height={40}
                            width={90}
                            objectFit="contain"
                            src="/assets/logo.svg"
                            alt="Ali Naderi Logo"
                        />
                    </div>
                </Link>
            </div>
            <div className="flex flex-1 justify-end self-center">
                <FontAwesomeIcon
                    icon={faBars}
                    className="text-neutral-500 h-6 lg:h-6 align-middle"
                    onClick={() => {}}
                />
            </div>
        </nav>
    );
};

export default Header;
