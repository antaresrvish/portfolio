import { IFive } from "@/types/components/layers/five"
import IconUtility from "../utils/icon-util"
export default function Five({ data }: { data: IFive }) {
    return (
        <div className="space-y-4">
            {data.map((item) => (
                <a href={item.link} target="_blank" className="flex items-center space-x-3 text-primary bg-background backdrop-blur-md hover:bg-background-secondary duration-300 transition rounded-lg p-2 w-fit hover:cursor-pointer">
                    <IconUtility data={{ value: item.icon, isTechStack: false }} />
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-secondary">{item.tag}</span>
                </a>
            ))}
        </div>
    )
}
