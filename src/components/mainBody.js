import PersonalData from './personalData';
import Skills from './skills';
import Experience from './experience';

const MainBody = (props) => {
    const {name, career, cel, email, skills, difficulty,titleActivity, year, company, description } = props;
    return (
        <div className="mainBody">
            <div className="CV">
                <div className="name-user">{name}</div>
                <PersonalData career={career} cel={cel} email={email} />
                <div className='DIV-skills-and-experience'>
                    <div className='skills'>
                        Skills
                        <Skills skills={skills} deleteSkill={props.deleteSkill} difficulty={difficulty}/>
                    </div>
                    <div className='experience'>
                        Experience
                        <ul className="experiences">
                            <Experience titleActivity ={titleActivity} year = {year} company = {company} description ={description} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBody;