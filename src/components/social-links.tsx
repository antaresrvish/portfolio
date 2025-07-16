import { BlurFade } from "./effects/blur-fade";
import Tooltip from "./utils/tooltip";
import { ISocialLinks } from "@/types/components/social-links";
import IconUtility from "./utils/icon-util";

export default function socialLinks({ data }: { data: ISocialLinks }) {
    return (
        <BlurFade delay={1000}>
            <div className="flex mt-6">
                {data.map((item) => {
                    return (
                        <Tooltip key={item.tooltip} text={item.tooltip}>
                            <a href={item.link} target="_blank" className="text-secondary hover:text-primary duration-300">
                                <IconUtility data={{ value: item.icon, className: "inline-block w-5 h-5 mr-3.5", isTechStack: false }} />
                            </a>
                        </Tooltip>
                    )
                })}
            </div>
        </BlurFade>
    );
}