import ProjectCard from "./project-card";

export default function Portfolio() {
    return (
        <>
            <h2 className="text-2xl text-header">Portfolio</h2>
            <ProjectCard title="NYU University Award Web Application" description="Developed and maintained web applications for NYU’s HR Department, including university awards management app. Troubleshooted many bugs with the web application and the development environment.
Provided user support to employees who used web applications.
Development work involved both backend (Java, Oracle Database, Spring Framework, WebLogic) and frontend (HTML, CSS, JavaScript, Thymeleaf).
Assisted new employees with development environment setup and mentored them in system knowledg
"/>
            <ProjectCard title="Pokemon Showdown Win Percentage Predictor" description="Built a Python web scraping pipeline used to extract replay data from Pokémon Showdown. Deployed on an AWS EC2 server and stores data logs in cloud storage in AWS.
A log parsing system was built to convert the data into structured battle states for each turn.
The output data was used to build a neural network in PyTorch to predict a player's win probability at any given turn based on the state of the battle.
Utilized AI tools such as Copilot and ChatGPT were utilized to accelerate project development and improve overall efficiency.
"/>
        </>
    );
}
