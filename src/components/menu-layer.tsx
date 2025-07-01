import { useMenu } from '@/contexts/MenuContext';
import One from '@/pages/layers/one';
import Two from '@/pages/layers/two';
import Three from '@/pages/layers/three';
import Four from '@/pages/layers/four';
import Five from '@/pages/layers/five';

export default function MenuLayer() {
    const { activeItem } = useMenu();

    const renderContent = () => {
        switch (activeItem) {
            case 'ventures':
                return <One data={[
                    {iconUrl: '/rust.png', title: 'Rust KVM', description:'Rust based key-value in memory database', photoUrl:'./test.png', link:'https://github.com/antaresrvish/rust-kvm'},
                    {iconUrl: '/rust.png', title: 'Rust KVM', description:'Rust based key-value in memory database', photoUrl:'./test.png', link:'https://github.com/antaresrvish/rust-kvm'},
                    {iconUrl: '/rust.png', title: 'Rust KVM', description:'Rust based key-value in memory database', photoUrl:'./test.png', link:'https://github.com/antaresrvish/rust-kvm'}
                ]}/>;
            case 'services':
                return <Two />;
            case 'clients':
                return <Three />;
            case 'tech-stack':
                return <Four />;
            case 'connect':
                return <Five />;
            default:
                return <One data={[]} />;
        }
    };

    return (
        <div className="w-full mt-8">
            {renderContent()}
        </div>
    );
}