import { IThree } from "@/types/components/layers/three";

export default function Three({ data = [] }: { data: IThree}) {
    return (
        <div className="pb-6 max-w-4xl mx-auto">
            <div className="space-y-6">
                {data.map((item, index) => (
                    <div key={index} className="p-3 rounded-lg bg-background md:p-6 border border-card-border backdrop-blur-md">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5 text-paragraph">
                                    <path fill="currentColor" d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <blockquote className="text-paragraph text-sm md:text-lg mb-3 leading-relaxed">
                                    "{item.text}"
                                </blockquote>
                                <div className="flex items-center">
                                    {item.avatar ? (
                                        <img
                                            src={item.avatar}
                                            alt={item.author}
                                            className="w-10 h-10 rounded-lg object-cover flex-shrink-0 mr-2"
                                        />
                                    ) : (
                                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 text-black">
                                                <path fill="currentColor" d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                                            </svg>
                                        </div>
                                    )}
                                    <span className="font-semibold text-primary text-xs md:text-lg">{item.author}</span>
                                    <div className="flex-1" />
                                    <span className="text-gray-500 text-sm">{item.projectName}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
