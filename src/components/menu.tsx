import { useMenu } from '@/contexts/menu-context';
import { BlurFade } from './effects/blur-fade';
import { SlidingBackground } from './utils/sliding-background';
import { IMenuProps } from '@/types/components/menu';

export default function Menu({ menuItems = [], delay = 1250, className = "" }: IMenuProps) {
    const { activeItem, setActiveItem } = useMenu();

    return (
        <BlurFade delay={delay}>
            <nav className={`flex justify-start sticky sm:justify-start mt-20 sm:mt-20 px-0 ${className}`}>
                <SlidingBackground 
                    activeItem={activeItem}
                    className="flex flex-wrap items-center justify-start sm:justify-start rounded-full p-1 max-w-full">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            data-item-id={item.id}
                            onClick={() => setActiveItem(item.id)}
                            disabled={item.disabled}
                            className={`
                                relative z-10 mr-1 sm:mr-2 px-2 mb-1 sm:px-3 py-1 text-xs sm:text-sm rounded-full 
                                transition-colors duration-300 ease-out hover:cursor-pointer whitespace-nowrap
                                ${activeItem === item.id
                                    ? 'text-white font-medium'
                                    : 'text-gray-600 hover:text-gray-90'
                                }
                                ${item.disabled ? 'opacity-50 cursor-not-allowed hover:text-gray-600 hover:bg-transparent' : ''}
                            `}
                        >
                            <span>{item.label}</span>
                        </button>
                    ))}
                </SlidingBackground>
            </nav>
        </BlurFade>
    );
}