import personalPhoto from '../assets/personal-photo.jpg'
function Aboutme() {
    return (
        <div className="aboutme">
            <h1 className="titleAboutme">About Me</h1>
            <div className="aboutme-content">
                <img src={personalPhoto} alt="personal photo" className="photo" />
                <div className="greeting">
                    <h2 className="greetings">
                        <div>Hello, my name is <span className="name">Anna </span></div>
                        <div>and I am a  <span className="job">UI/UX designer </span> and front-end developer
                        with a passion for building modern, responsive and user-friendly web applications.</div>
                        <div>I delivery high-quality work that meets your goals and exceeds your expectations.</div>
                    </h2>
                </div>
                <div className="statement">
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
                </div>
            </div>
        </div>
    );
}
export default Aboutme;