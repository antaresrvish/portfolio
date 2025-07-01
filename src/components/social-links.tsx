import * as fa6 from "react-icons/fa6";
import { BlurFade } from "./effects/blur-fade";
import Tooltip from "./utils/tooltip";
import { ISocialLinks } from "@/types/components/social-links";

export default function socialLinks({ data }: { data: ISocialLinks }) {
    return (
        <BlurFade delay={1250}>
            <div className="flex mt-6">
                {data.map((item) => {
                    const iconName = ("Fa" + item.icon) as keyof typeof fa6;
                    const IconComponent = fa6[iconName] ? fa6[iconName] : fa6.FaQuestion;
                    return (
                        <Tooltip key={item.tooltip} text={item.tooltip}>
                            <a href={item.link} target="_blank" className="text-gray-900">
                                {IconComponent && (
                                    <IconComponent className="inline-block w-5 h-5 mr-3.5" />
                                )}
                            </a>
                        </Tooltip>
                    )
                })}
            </div>
        </BlurFade>
    );
}