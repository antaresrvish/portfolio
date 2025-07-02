import {IOne} from '@/types/pages/layers/one'

export default function One({ data }: { data: IOne}) {
    return (
        <>
            {data.map((item, index) => (
                <div key={index}>
                    <div className="w-full flex flex-row shadow-xl/5 mb-6 shadow-black rounded-xl border border-gray-200 h-[293px]">
                        <div className="w-1/2 pl-8 pr-4 pt-8">
                            <div className="shadow-2xl/80 shadow-black w-8 h-8">
                                <img src={item.iconUrl} alt="Icon" className="rounded-lg" />
                            </div>
                            <div className="text-xl font-medium mt-4">{item.title}</div>
                            <div className="text-sm font-normal text-gray-600 mt-2">{item.description}</div>
                            <div className="group mt-24 border border-black w-28 flex justify-center items-center py-1 rounded-full hover:bg-gray-900 hover:cursor-pointer duration-300 transition-colors">
                                <a href={item.link} target="_blank" className="flex gap-2 items-center">
                                    <span className="text-sm font-medium text-black group-hover:text-white duration-300">Visit site</span>
                                    <div className="w-4 h-4 group-hover:rotate-0 rotate-45 transition-transform duration-300 ease-in-out">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 256 256"
                                            className="w-full h-full fill-black group-hover:fill-white transition-colors duration-300">
                                            <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="w-1/2 flex pt-6">
                            <div className="max-w-full rounded-tl-xl rounded-br-xl drop-shadow-2xl drop-shadow-black/20 border border-gray-200">
                                <img src={item.photoUrl} className="rounded-tl-xl rounded-br-xl block w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}