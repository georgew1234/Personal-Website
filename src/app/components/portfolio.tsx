import ProjectCard from "./project-card";
export default function Portfolio() {
    return (
        <>
            <h2 className="text-2xl text-header">Portfolio</h2>
            <ul className="space-y-2">
                <li>• Project 1 – Personal blog built with Next.js</li>
                <li>• Project 2 – E-commerce UI with Tailwind CSS</li>
                <li>• Project 3 – API Dashboard with charts and filters</li>
            </ul>
            <ProjectCard href="google.com" title="fuck" description="it"/>
        </>
    );
}
