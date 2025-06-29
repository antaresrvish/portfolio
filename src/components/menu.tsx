import { useState } from 'react';

const menuItems = [
    { id: 'ventures', label: 'Ventures' },
    { id: 'services', label: 'Services' },
    { id: 'clients', label: 'Clients' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'connect', label: 'Connect' },
];

export default function Menu() {
    const [activeItem, setActiveItem] = useState('ventures');

    return (
        <nav className="flex justify-start sm:justify-start mt-20 sm:mt-20 px-0">
            <div className="flex flex-wrap items-center justify-start sm:justify-start rounded-full p-1 max-w-full">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveItem(item.id)}
                        className={`
              relative mr-1 sm:mr-2 px-2 mb-1 sm:px-3 py-1 text-xs sm:text-sm  rounded-full transition-all duration-300 ease-in-out hover:cursor-pointer whitespace-nowrap
              ${activeItem === item.id
                                ? 'bg-black text-white shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                            }
            `}>
                        {item.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}