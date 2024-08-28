function Resume() {
    return (
        <div className="resume">
            <h1 className="titleResume">Resume</h1>
            <p>Download my resume</p>
            <div className="skills">
                <h2 className="headerSkills">Front-end skills:</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className="skills">
                <h3 className="headerSkills">Back-end skills:</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Sequelize</li>
                </ul>
            </div>
        </div>
    );
}
export default Resume;