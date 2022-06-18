import PersonalData from './personalData';
import Skills from './skills';
import Experience from './experience';

const MainBody = (props) => {
    const {name, career, cel, email, skills, difficulty,titleActivity, year, year2, company, description } = props;
    return (
        <div className="mainBody">
            <div className="CV">
                <div className='DIV-personal-data'>
                    <div className="name-user">{name}</div>
                    <PersonalData career={career} cel={cel} email={email} />
                </div>
                <div className='DIV-skills-and-experience'>
                    <div className='skills'>
                        <div className='skills-and-experience-TITLE'>
                            Skills
                        </div>
                        <Skills skills={skills} deleteSkill={props.deleteSkill} difficulty={difficulty}/>
                    </div>
                    <div className='experience'>
                        <div className='skills-and-experience-TITLE'>
                            Experience
                        </div>
                        <ul className="experiences">
                            <Experience titleActivity ={titleActivity} year = {year} company = {company} description ={description} year2 = {year2} 
                            deleteExperience = {props.deleteExperience} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBody;