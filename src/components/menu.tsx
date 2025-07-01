import { useMenu } from '@/contexts/menu-context';
import { BlurFade } from './effects/blur-fade';
import { IMenuItems, IMenuProps } from '@/types/components/menu';

export default function Menu({ menuItems = [], delay = 1250, className = "" }: IMenuProps) {
    const { activeItem, setActiveItem } = useMenu();
    return (
        <BlurFade delay={delay}>
            <nav className={`flex justify-start sm:justify-start mt-20 sm:mt-20 px-0 ${className}`}>
                <div className="flex flex-wrap items-center justify-start sm:justify-start rounded-full p-1 max-w-full">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveItem(item.id)}
                            disabled={item.disabled}
                            className={`
                                relative mr-1 sm:mr-2 px-2 mb-1 sm:px-3 py-1 text-xs sm:text-sm rounded-full transition-all duration-300 ease-in-out hover:cursor-pointer whitespace-nowrap
                                ${activeItem === item.id
                                    ? 'bg-black text-white shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                                }
                                ${item.disabled ? 'opacity-50 cursor-not-allowed hover:text-gray-600' : ''}
                            `}>
                            <div className="flex items-center gap-1">
                                <span>{item.label}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </nav>
        </BlurFade>
    );
}