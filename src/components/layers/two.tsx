import { ITwoService } from "@/types/components/layers/two"

export default function Two({ data = { services: [] } }: { data: ITwoService }) {
    return (
        <div className="">
            {data.services.map((item, index) => {
                index = index + 1;
                return (
                    <div className="space-y-4 mb-2">
                        <div className="flex items-center bg-background px-2  rounded-lg backdrop-blur-md justify-between py-4 border-b border-card-border">
                            <div className="flex items-center space-x-4">
                                <span className="text-paragraph font-mono">0{index}.</span>
                                <h3 className="text-sm md:text-lg font-medium text-primary">{item.title}</h3>
                            </div>
                            <div className="px-2 w-[120px] shadow-md border-1 shadow-black/5 border-button-border rounded-full flex items-center py-1">
                                <span className="text-secondary text-xs text-center">Starts from ${item.price}</span>
                            </div>
                        </div>
                    </div>
                )
            })}

            <div className="flex items-center justify-center space-x-4 pt-5 pb-10">
                <div className="group border-button-border border bg-background backdrop-blur-md w-28 flex justify-center items-center py-1 rounded-full hover:bg-background-secondary hover:cursor-pointer duration-300 transition-colors">
                    <a href={data.bookCallLink} target="_blank" className="flex gap-2 items-center">
                        <span className="text-sm font-medium text-primary group-hover:text-white duration-300">Book a call</span>
                        <div className="w-4 h-4 group-hover:rotate-0 rotate-45 transition-transform duration-300 ease-in-out">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                className="w-full h-full fill-primary group-hover:fill-white transition-colors duration-300">
                                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                            </svg>
                        </div>
                    </a>
                </div>
                <div className="group border border-button-border backdrop-blur-md w-28 flex justify-center items-center py-1 rounded-full hover:bg-background-secondary hover:cursor-pointer duration-300 transition-colors">
                    <a href={data.emailLink} target="_blank" className="flex gap-2 items-center">
                        <span className="text-sm font-medium text-primary group-hover:text-white duration-300">Send email</span>
                        <div className="w-4 h-4 group-hover:rotate-0 rotate-45 transition-transform duration-300 ease-in-out">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                className="w-full h-full fill-primary group-hover:fill-white transition-colors duration-300">
                                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}