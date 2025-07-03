import * as fa6 from "react-icons/fa6";
import { IIconUtility } from "@/types/components/utils/icon-util";

export default function IconUtility ({ data }: { data:IIconUtility}) {
    const iconName = ("Fa" + data.value) as keyof typeof fa6;
    const IconComponent = fa6[iconName] ? fa6[iconName] : fa6.FaQuestion
    return (
        <IconComponent className={data.className}></IconComponent>
    )
}