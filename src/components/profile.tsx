export default function Profiler({ title, bio1, bio2 }: { title: string; bio1: string; bio2: string }) {
    return (
       <div className="flex flex-col justify-center">
            <img src="/profile-photo.jpeg" alt="Profile Image" className="rounded-lg shadow-xs shadow shadow-black w-16 h-16 mb-6"/>
            <span className="mt-2 text-xl font-medium mb-3">{title}</span>
            <span className="text-lg text-gray-600">{bio1}</span>
            <span className="text-lg text-gray-600">{bio2}</span>
       </div>
    )
}