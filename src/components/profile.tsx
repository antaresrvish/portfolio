import { IProfile } from '@/types/components/profile';
import { BlurFade } from './effects/blur-fade';

export default function Profile({ profile }: {profile: IProfile}) {
    const { title, biography, photoUrl } = profile;

    return (
        <div className="flex flex-col justify-center">
            <BlurFade delay={250}>
                <img src={photoUrl} alt="Profile Image" className="rounded-[15px] border-2 border-white drop-shadow-2xl/20 drop-shadow-black w-16 h-16 mb-6" />
            </BlurFade>
            <BlurFade delay={500}>
                <span className="mt-2 md:text-xl text-lg font-medium mb-3">{title}</span>
            </BlurFade>
            {biography.map((biography, index) => (
                <BlurFade delay={750 + index * 100} key={index}>
                    <span className="md:text-lg text-md text-gray-600">{biography}</span>
                </BlurFade>
            ))}
        </div>
    )
}