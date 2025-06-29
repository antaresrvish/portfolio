import { FaXTwitter, FaYoutube, FaLinkedin, FaTelegram, FaFoursquare } from "react-icons/fa6";
import Tooltip from "./utils/tooltip";
import {BlurFade} from "./effects/blur-fade";

export default function socialLinks({ x, youtube, linkedin, email, foursquare }: { x: string; youtube: string; linkedin: string; email: string; foursquare: string }) {
    return (
        <BlurFade delay={1250}>
        <div className="flex mt-10">
            <Tooltip text="Twitter/X">
                <a href={x} className="text-gray-900">
                    <FaXTwitter className="inline-block w-5 h-5 mr-3.5" />
                </a>
            </Tooltip>

            <Tooltip text="YouTube">
                <a href={youtube} className="text-gray-900">
                    <FaYoutube className="inline-block w-5 h-5 mr-3.5" />
                </a>
            </Tooltip>

            <Tooltip text="LinkedIn">
                <a href={linkedin} className="text-gray-900">
                    <FaLinkedin className="inline-block w-5 h-5 mr-3.5"/>
                </a>
            </Tooltip>

            <Tooltip text="Framer Marketplace">
                <a href={foursquare} className="text-gray-900">
                    <FaFoursquare className="inline-block w-5 h-5 mr-3.5" />
                </a>
            </Tooltip>

            <Tooltip text="Send email">
                <a href={email} className="text-gray-900">
                    <FaTelegram className="inline-block w-5 h-5 mr-3.5" />
                </a>
            </Tooltip>
        </div>
        </BlurFade>
    );
}