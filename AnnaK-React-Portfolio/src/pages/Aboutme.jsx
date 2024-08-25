import personalPhoto from '../assets/personal-photo.jpg'
 function Aboutme() {
    return (
        <div>
            <h1>About Me</h1>
            <div>
                <img src={personalPhoto} alt="personal photo" className="photo" />
            </div>
            <p>
                I am going to become a web developer. I always try to go out of my comfort zone and learn something new. 
                My interests are yoga, taichi, paddle boarding, street photography.
            </p>
        </div>
    );
}
export default Aboutme;