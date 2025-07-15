import { IFive } from "@/types/components/layers/five"
import IconUtility from "../utils/icon-util"
export default function Five({ data }: { data: IFive }) {
    return (
        <div className="space-y-4">
            {data.map((item) => (
                <a href={item.link} target="_blank" className="flex items-center space-x-3 text-green-200/90 bg-green-200/20 backdrop-blur-md hover:bg-green-900/40 duration-300 transition rounded-lg p-2 w-fit hover:cursor-pointer">
                    <IconUtility data={{ value: item.icon }} />
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-green-200/50">{item.tag}</span>
                </a>
            ))}
        </div>
    )
}
