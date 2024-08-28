import personalPhoto from '../assets/personal-photo.jpg'
 function Aboutme() {
    return (
        <div className="aboutme">
            <h1 className="titleAboutme">About Me</h1>
            <div className="aboutme-content">
                <img src={personalPhoto} alt="personal photo" className="photo" />
            <p>
                I am going to become a web developer. I always try to go out of my comfort zone and learn something new. 
                My interests are yoga, taichi, paddle boarding, street photography.
            </p>
            </div>
        </div>
    );
}
export default Aboutme;