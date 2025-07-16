import { Icon } from "@iconify/react";
import { IIconUtility } from "@/types/components/utils/icon-util";

export default function IconUtility ({ data }: { data:IIconUtility}) {
    const iconSet = data.isTechStack ? 'logos' : 'simple-icons';
    const iconName = `${iconSet}:${data.value}`;

    return (
        <Icon icon={iconName} className={data.className} />
    )
}