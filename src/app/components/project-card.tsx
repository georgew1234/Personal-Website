export default function ProjectCard ({href, title, description}: {href: string, title: string, description: string}) {
    return (
        <a
            href={href}
            className="block p-6 rounded-2xl shadow-md transition-transform transform hover:shadow-xl no-underline"
        >
            <h2 className="text-xl text-header">{title}</h2>
            <p>{description}</p>
        </a>
    )
}