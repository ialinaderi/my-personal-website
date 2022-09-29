import React from "react";
import Image from "next/image";

interface SkillTileProps {
    className?: string;
    icon: string;
    title: string;
}

const SkillTile: React.FC<SkillTileProps> = ({ icon, title, className }) => (
    <div className="flex flex-col rounded items-center justify-center p-4 pt-5 gap-2 bg-neutral-800">
        <Image
            src={`/assets/icons/${icon}.png`}
            alt={title}
            height="35"
            width="35"
            objectFit="contain"
        />
        <span className="text-xs">{title}</span>
    </div>
);

export default SkillTile;
