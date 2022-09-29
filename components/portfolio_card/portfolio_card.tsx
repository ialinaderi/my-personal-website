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

interface PortfolioCardProps {
    imageSrc: string;
    badge: string;
    url?: string;
    githubUrl?: string;
    downloadUrl?: string;
    title: string;
    description: string;
    icons: string[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
    imageSrc,
    badge,
    url,
    title,
    description,
    icons,
    githubUrl,
    downloadUrl,
}) => (
    <li className="snap-center">
        <div className="bg-neutral-800 relative flex flex-col flex-shrink-0 min-h-[31rem] w-[85vw] lg:w-80 overflow-hidden rounded-lg ">
            <Image
                width={300}
                height={200}
                objectFit="fill"
                src={imageSrc}
                alt="Memarica Website"
            />
            <div className="px-5 py-4 flex flex-col flex-1">
                <div className="flex justify-between items-center">
                    <span className="bg-neutral-600 text-neutral-300 text-xs mr-2 px-2.5 py-0.5 rounded-full">
                        {badge}
                    </span>
                    <div className="flex gap-3">
                        {downloadUrl && (
                            <a href={downloadUrl}>
                                <FontAwesomeIcon
                                    icon={faCloudArrowDown}
                                    className="text-neutral-500"
                                />
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="text-neutral-500"
                                />
                            </a>
                        )}
                        {url && (
                            <a href={url} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                    className="text-neutral-500"
                                />
                            </a>
                        )}
                    </div>
                </div>
                <div className="py-3 flex flex-col flex-1">
                    <h2 className="text-2xl">{title}</h2>
                    <p className="mt-1 text-neutral-400 text-sm">
                        {description}
                    </p>
                    <div className="flex flex-1 items-end flex-wrap mt-5 gap-3 opacity-70">
                        {icons.map((item: string) => {
                            return (
                                <Image
                                    key={item}
                                    src={`/assets/icons/${item}.png`}
                                    alt={item}
                                    height="18"
                                    width="18"
                                    objectFit="contain"
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </li>
);

export default PortfolioCard;
