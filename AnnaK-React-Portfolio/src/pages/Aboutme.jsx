import personalPhoto from '../assets/personal-photo.jpg'
function Aboutme() {
    return (
        <div className="aboutme">
            <h1 className="titleAboutme">About Me</h1>
            <div className="aboutme-content">
                <img src={personalPhoto} alt="personal photo" className="photo" />
                <div className="greeting">
                    <h2 className="greetings">Hello, my name is <br><span className="name">Anna</span></br> and I'm a UI/UX designer/front-end developer with a passion for the web design.</h2>
                </div>
                <p className="statement">
                    <span>There </span>
                    <span>are </span>
                    <span>no </span>
                    <span>limits </span>
                    <span>to </span>
                    <span>what </span>
                    <span>you </span>
                    <span>can </span>
                    <span>accomplish, </span>
                    <span>except </span>
                    <span>the </span>
                    <span>limits </span>
                    <span>you </span>
                    <span>place </span>
                    <span>on </span>
                    <span>your </span>
                    <span>own </span>
                    <span>thinking.</span>
                </p>
            </div>
        </div>
    );
}
export default Aboutme;