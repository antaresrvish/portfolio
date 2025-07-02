export default function BlurFooter() {
    return (
        <footer className="fixed bottom-0 left-0 w-full h-10 z-10">
            <div className="absolute inset-0 overflow-hidden">
                <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        zIndex: 1,
                        maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%)',
                        backdropFilter: 'blur(0.0625px)'
                    }}
                />
                <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        zIndex: 2,
                        maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)',
                        backdropFilter: 'blur(0.125px)'
                    }}
                />
                <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        zIndex: 3,
                        maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)',
                        backdropFilter: 'blur(0.25px)'
                    }}
                />
                <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        zIndex: 4,
                        maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)',
                        backdropFilter: 'blur(0.5px)'
                    }}
                />
                <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        zIndex: 5,
                        maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)',
                        backdropFilter: 'blur(1px)'
                    }}
                />
                <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        zIndex: 6,
                        maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
                        backdropFilter: 'blur(2px)'
                    }}
                />
                <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        zIndex: 7,
                        maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)',
                        backdropFilter: 'blur(4px)'
                    }}
                />
                <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        zIndex: 8,
                        maskImage: 'linear-gradient(rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)',
                        backdropFilter: 'blur(8px)'
                    }}
                />
            </div>
        </footer>
    )
}