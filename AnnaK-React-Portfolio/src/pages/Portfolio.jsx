import Project from "../components/Project";
import AstroWhisper from "../assets/AstroWhisper app.png";
import WhatchMyPetapp from "../assets/Whatch My Pet app.png";
import PhotoBlog from "../assets/Street photography blog.png";

const Portfolio = () => {
    const projects = [
        {
            title: "AstroWhisper App",
            image: AstroWhisper,
            deployedLink: 'https://itswillynilly.github.io/Project-01-AstroWhisper/',
            repoLink: "https://github.com/itswillynilly/Project-01-AstroWhisper"
        },
        {
            title: "Watch My Pet App",
            image: WhatchMyPetapp,
            deployedLink: 'https://watch-my-pet.onrender.com/',
            repoLink: 'https://github.com/tjmcd2010/Watch-My-Pet'
        },
        {
            title: "Street Photography Blog",
            image: PhotoBlog,
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