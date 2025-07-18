import { IProfile } from '@/types/components/profile';
import { BlurFade } from './effects/blur-fade';

export default function profile({ profile }: { profile: IProfile }) {
    const { title, biography, photoUrl } = profile;

    return (
        <div className="flex flex-col justify-center">
            <BlurFade delay={200}>
                <img src={photoUrl} alt="Profile Image" className="rounded-[15px] border-2 border-green-200/20 drop-shadow-2xl/20 drop-shadow-black w-15 h-15 mb-6" />
            </BlurFade>
            <BlurFade delay={400}>
                <div className='mb-3 md:text-2xl text-lg font-medium text-primary'>
                    <span>{title}</span>
                </div>
            </BlurFade>
            {biography.map((biographyItem: string, index: number) => (
                <BlurFade delay={600 + index * 100} key={index}>
                    <div className="md:text-xl text-md text-paragraph">
                        <span>{biographyItem}</span>
                    </div>
                </BlurFade>
            ))}
        </div>
    )
}