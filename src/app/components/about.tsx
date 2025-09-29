export default function About() {
    return (
        <>
            <h2 className="text-2xl text-header">About Me</h2>
            <p>
                {"I'm a student at New York University, studying Computer Science and Data Science. I enjoy building software and working with data, and I'm currently gaining experience in both areas through coursework, internships, and personal projects. Right now, I'm working as a Software Development Intern at NYU, where I help develop a web application used by faculty members to manage university awards. I work on both the backend (using Java and Oracle Database) and the frontend (using HTML, CSS, JavaScript, and Thymeleaf. In my free time, I like working on some side projects which you can see in my portfolio."}
            </p>
            <p className="py-8">
                You can view my resume <a href="/Resume.pdf" target="_blank" className="text-blue-500 hover:underline">here</a>
            </p>
        </>
    );
}
