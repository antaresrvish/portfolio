import {IOne} from '@/types/components/layers/one'
import IconUtility from '../utils/icon-util';

export default function One({ data = [] }: { data: IOne}) {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <div className="w-full flex flex-col sm:flex-row shadow-md/5 mb-6 shadow-black rounded-xl border border-green-900/20 h-fit backdrop-blur-md bg-green-200/20">
                        <div className="w-full sm:w-1/2 px-4 sm:pl-8 sm:pr-4 pt-6 sm:pt-8 flex flex-col justify-between">
                            <div>
                                <div className="shadow-2xl/80 shadow-black w-8 h-8">
                                    <IconUtility data={{value: item.icon ?? "", className: "inline-block text-4xl mr-3.5", isTechStack: true}}/>
                                </div>
                                <div className="text-lg sm:text-xl font-medium mt-4 text-green-200/90">{item.title}</div>
                                <div className="text-sm font-normal text-gray-300 mt-2">{item.description}</div>
                            </div>
                            <div className="group border mt-4 sm:mt-6 border-green-200/90 w-28 flex justify-center items-center py-1 rounded-full hover:bg-green-300/50 hover:cursor-pointer duration-300 transition-colors mb-4 sm:mb-8">
                                <a href={item.link} target="_blank" className="flex gap-2 items-center">
                                    <span className="text-sm font-medium text-green-200/90 group-hover:text-white duration-300">Visit site</span>
                                    <div className="w-4 h-4 group-hover:rotate-0 rotate-45 transition-transform duration-300 ease-in-out">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 256 256"
                                            className="w-full h-full fill-green-200/90 group-hover:fill-white transition-colors duration-300">
                                            <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 flex items-center sm:items-end px-4 sm:px-0 sm:pt-6 pb-4 sm:pb-0">
                            <div className="w-full rounded-xl sm:rounded-bl-none sm:rounded-tr-none sm:rounded-tl-xl sm:rounded-br-xl border shadow-black shadow-md/5 border-green-900/20 overflow-hidden">
                                <img 
                                    src={item.photoUrl} 
                                    alt={item.title}
                                    className="rounded-xl sm:rounded-bl-none sm:rounded-tr-none sm:rounded-tl-xl sm:rounded-br-xl w-full h-full object-contain" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}