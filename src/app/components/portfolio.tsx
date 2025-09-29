import ProjectCard from "./project-card";
export default function Portfolio() {
    return (
        <>
            <h2 className="text-2xl text-header">Portfolio</h2>
            <ProjectCard title="NYU University Award Web Application" description="Developed and maintained web applications for NYU’s HR Department, including university awards management APP. Troubleshooted many bugs with the web application and the development environment.
Provided user support, praised for great communication skills, ability  to explain tech issues to non tech people.
Development work involves both backend (Java, Oracle Database) and frontend (HTML, CSS, JavaScript, Thymeleaf). Technology used including Spring Framework and Weblogic

"/>
            <ProjectCard title="Pokemon Showdown Win Percentage Predictor" description="The project runs on a cloud server and stores data logs in cloud storage in AWS.
Python web scraping pipeline is used to extract replay data from Pokémon Showdown.
A log parsing system was built to convert the data into structured battle states for each turn.
The output data was used to build a neural network in PyTorch to predict a player's win probability at any given turn based on the state of the battle.
"/>
        </>
    );
}
