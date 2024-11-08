import Link from "next/link";

const SocialLinks = ({href, icon}) => {
    return (
        <Link className="m-4 hover:bg-[#f0f0f0e0] hover:text-[#0f0f0f] p-2 rounded" 
        href={href} target="_blank" rel="noreferrer">
            {icon}
        </Link>
    );
};

export default SocialLinks;