export default function SocialIcon({ href, label, children, download }) {
    return (
        <a
            href={href}
            target={download ? undefined : "_blank"}
            rel={download ? undefined : "noopener noreferrer"}
            download={download}
            aria-label={label}
            className="relative group text-2xl text-stone-400 hover:text-stone-900 transition-colors">
            {children}
            <span className="absolute left-1/2 -translate-x-1/2 
                            top-full mt-2 px-2 py-1 text-sm text-white bg-stone-700 rounded-md
                            opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {label}
            </span>
        </a>
    );
}