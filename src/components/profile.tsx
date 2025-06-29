import { Profile } from '@/types/components/profile';
import { BlurFade } from './effects/blur-fade';

export default function Profiler({ title, bio1, bio2, photoUrl }: Profile) {
    return (
        <div className="flex flex-col justify-center">
            <BlurFade delay={250}>
                <img src={photoUrl} alt="Profile Image" className="rounded-[15px] border-2 border-white drop-shadow-2xl/20 drop-shadow-black w-16 h-16 mb-6" />
            </BlurFade>
            <BlurFade delay={500}>
                <span className="mt-2 text-xl font-medium mb-3">{title}</span>
            </BlurFade>
            <BlurFade delay={750}>
                <span className="text-lg text-gray-600">{bio1}</span>
            </BlurFade>
            <BlurFade delay={1000}>
                <span className="text-lg text-gray-600">{bio2}</span>
            </BlurFade>
        </div>
    )
}