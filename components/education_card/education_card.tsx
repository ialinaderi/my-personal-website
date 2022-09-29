import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare,
    faIcons,
    faCloudArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
//import { Test } from './PortfolioCard.styles';

interface EducationCardProps {
    logoSrc: string;
    eduName: string;
    eduTitle: string;
    time: string;
    description: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
    logoSrc,
    eduName,
    eduTitle,
    time,
    description,
}) => (
    <li className="snap-center">
        <div className="bg-neutral-800 relative flex flex-col justify-between flex-shrink-0 min-h-[22rem] w-[85vw] lg:w-80 overflow-hidden rounded-lg p-5">
            <div>
                <div className="flex mb-1">
                    <div className="w-[30%]">
                        <Image
                            src={logoSrc}
                            className="rounded-full"
                            alt="Islamic Azad University Logo"
                            width="200"
                            height="200"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <div className="w-[70%] flex flex-col justify-center pl-5">
                        <h2 className="text-lg leading-6">{eduName}</h2>
                        <h5 className="text-xs font-thin">{time}</h5>
                    </div>
                </div>
                <h3 className="inline-block text-neutral-200">{eduTitle}</h3>
                <p className="mt-2 text-neutral-400 text-sm">{description}</p>
            </div>
        </div>
    </li>
);

export default EducationCard;
