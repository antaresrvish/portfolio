import { IFour } from "@/types/pages/layers/four"

export default function Four({ data }: { data: IFour }) {
    return (
        <div className="pb-6 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {data.map((item) => (
                    <a href={item.url} target="_blank" className="bg-white h-[130px] sm:h-[140px] lg:h-[130px] rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200 group relative block cursor-pointer">
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4 text-gray-900">
                                <path fill="currentColor" d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                            </svg>
                        </div>
                        <div className="flex items-center justify-center h-full flex-col sm:flex-row sm:space-x-3 sm:space-y-0 space-y-2">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                {item.photoUrl && (
                                    <img
                                        src={item.photoUrl}
                                        alt={item.title}
                                        className="w-full h-full object-contain"
                                    />
                                )}
                            </div>
                            <span className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors text-sm sm:text-base text-center sm:text-left">
                                {item.title}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
