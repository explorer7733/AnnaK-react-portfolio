import Project from "../components/Project";
import AstroWhisper from "../assets/AstroWhisper app.png";
import WhatchMyPetapp from "../assets/Whatch My Pet app.png";
import PhotoBlog from "../assets/Street photography blog.png";
import Weatherdashboard from "../assets/Weather dashboard.png";
import Placeholder from "../assets/unsplash-image.jpg";
import EmployeeTracker from "../assets/employee tracker.png";

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
            deployedLink: 'https://explorer7733.github.io/AnnaK-personal-blog/',
            repoLink: 'https://github.com/explorer7733/AnnaK-personal-blog?tab=readme-ov-file'
        },
        {
            title: "Weather Dashboard",
            image: Weatherdashboard,
            deployedLink: 'https://explorer7733.github.io/AnnaK-weather-dashboard/',
            repoLink: 'https://github.com/explorer7733/AnnaK-weather-dashboard?tab=readme-ov-file'
        },
        {
            title: "Social Network",
            image: Placeholder,
            deployedLink: 'https://drive.google.com/file/d/1srGCANeEjENkK1Na1VY41BijlM5_eDcY/view',
            repoLink: 'https://github.com/explorer7733/AnnaK-social-network'
        },
        {
            title: "Employee Tracker",
            image: EmployeeTracker,
            deployedLink: 'https://drive.google.com/file/d/11L50nW-S9lbIprPzJFdG9A-glOb9HIKy/view',
            repoLink: 'https://github.com/explorer7733/AnnaK-employee-tracker'
        }

    ];
    return (         
        <div className="portfolio">
        <h1 className="titleProjects">My Projects</h1>
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