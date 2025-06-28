import { FaXTwitter, FaYoutube, FaLinkedin, FaTelegram, FaFoursquare } from "react-icons/fa6";

export default function socialLinks( { x, youtube, linkedin, telegram, foursquare}: { x: string; youtube: string; linkedin: string; telegram: string; foursquare: string }) {
    return (
        <div className="flex mt-10">
            <a href={x} className="text-gray-900 hover:text-gray-700 transition duration-300 ease-in-out hover:scale-110">
                <FaXTwitter className="inline-block w-6 h-6 mr-5" />
            </a>
            <a href={youtube} className="text-gray-900 hover:text-red-700 transition duration-300 ease-in-out hover:scale-110">
                <FaYoutube className="inline-block w-6 h-6 mr-5" />
            </a>
            
            <a href={linkedin} className="text-gray-900 hover:text-blue-900 transition duration-300 ease-in-out hover:scale-110">
                <FaLinkedin className="inline-block w-6 h-6 mr-5" />
            </a>
            <a href={foursquare} className="text-gray-900 hover:text-yellow-700 transition duration-300 ease-in-out hover:scale-110">
                <FaFoursquare className="inline-block w-6 h-6 mr-5" />
            </a>
            <a href={telegram} className="text-gray-900 hover:text-slate-600 transition duration-300 ease-in-out hover:scale-110">
                <FaTelegram className="inline-block w-6 h-6 mr-5" />
            </a>
        </div>
    );
}