import Project from "./components/Project";

const Portfolio = () => {
    const projects = [
        {
            title: "AstroWhisper App",
            image: '/path/to/AstroWhisper app.png',
            deployedLink: 'https://itswillynilly.github.io/Project-01-AstroWhisper/',
            repoLink: "https://github.com/itswillynilly/Project-01-AstroWhisper"
        },
        {
            title: "Watch My Pet App",
            image: '/path/to/Watch My Pet App.png',
            deployedLink: 'https://watch-my-pet.onrender.com/',
            repoLink: 'https://github.com/tjmcd2010/Watch-My-Pet'
        }
    ];
    return (
        <div className="portfolio">
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    image={project.image}
                    deployedLink={project.deployedLink}
                    repoLink={project.repoLink}
                />
            ))}
        </div>
    );
};


export default Portfolio;