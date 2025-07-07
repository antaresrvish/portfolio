import { useMenu } from '@/contexts/menu-context';
import { BlurFade } from './effects/blur-fade';
import { SlidingBackground } from './utils/sliding-background';
import { menuItems } from '@/config/menu-config';
import Link from 'next/link';

interface MenuProps {
    delay?: number;
    className?: string;
}

export default function Menu({ delay = 1250, className = "" }: MenuProps) {
    const { activeItem, setActiveItem } = useMenu();

    return (
        <BlurFade delay={delay}>
            <nav className={`flex justify-start sticky sm:justify-start mt-20 sm:mt-20 mb-10 px-0 ${className}`}>
                <SlidingBackground 
                    activeItem={activeItem}
                    className="flex flex-wrap items-center justify-start sm:justify-start rounded-full p-1 max-w-full">
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            href={`/?section=${item.id}`}
                            shallow={true}
                            className={`
                                relative z-10 mr-1 sm:mr-2 px-2 mb-1 sm:px-3 py-1 text-xs sm:text-sm rounded-full 
                                transition-colors duration-300 ease-out hover:cursor-pointer whitespace-nowrap
                                ${activeItem === item.id
                                    ? 'text-white font-medium'
                                    : 'text-gray-600 hover:text-gray-90'
                                }
                            `}
                            onClick={() => setActiveItem(item.id)}
                        >
                            <span data-item-id={item.id}>{item.title}</span>
                        </Link>
                    ))}
                </SlidingBackground>
            </nav>
        </BlurFade>
    );
}