import { IProfile } from '@/types/components/profile';
import { BlurFade } from './effects/blur-fade';

export default function profile({ profile }: { profile: IProfile }) {
    const { title, biography, photoUrl } = profile;

    return (
        <div className="flex flex-col justify-center">
            <BlurFade delay={250}>
                <img src={photoUrl} alt="Profile Image" className="rounded-[15px] border-2 border-gray-300 drop-shadow-2xl/20 drop-shadow-black w-15 h-15 mb-6" />
            </BlurFade>
            <BlurFade delay={500}>
                <div className='mb-3 md:text-2xl text-lg font-medium'>
                    <span>{title}</span>
                </div>
            </BlurFade>
            {biography.map((biography, index) => (
                <BlurFade delay={750 + index * 100} key={index}>
                    <div className="md:text-xl text-md text-gray-600">
                        <span>{biography}</span>
                    </div>
                </BlurFade>
            ))}
        </div>
    )
}