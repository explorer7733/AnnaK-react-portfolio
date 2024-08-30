function Resume() {
    return (
        <div className="resume">
            <h1 className="titleResume">Resume</h1>
            <p>Download my resume</p>
            <div className="skills-container">
                <div className="skills front-end">
                    <h2 className="headerSkills">Front-end skills:</h2>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>CSS Frameworks</li>
                        <li>JavaScript/JQuery</li>
                        <li>React</li>
                        <li>Responsive Design</li>
                        <li>DOM Manipulation</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div className="divider"></div>
                <div className="skills back-end">
                    <h3 className="headerSkills">Back-end skills:</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>GraphQL</li>
                        <li>MongoDB/PostgreSQL</li>
                        <li>Sequelize</li>
                        <li>REST/JSON</li>
                        <li>Git/Github</li>
                    </ul>
                </div>
                <div className="divider"></div>
                <div className="skills soft-skills">
                    <h3 className="headerSkills">Soft skills:</h3>
                    <ul>
                        <li>Creativity</li>
                        <li>Communication</li>
                        <li>Teamwork</li>
                        <li>Growth mindset</li>
                        <li>Problem-solving</li>
                        <li>Time Management</li>
                        <li>Situational Awareness</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Resume;