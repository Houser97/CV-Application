import PersonalData from './personalData';
import Skills from './skills';

const MainBody = (props) => {
    const {name, career, cel, email, skills} = props;
    return (
        <div className="mainBody">
            <div className="CV">
                <div className="name-user">{name}</div>
                <PersonalData career={career} cel={cel} email={email} />
                <div className='DIV-skills-and-experience'>
                    <div className='skills'>
                        Skills
                        <Skills skills={skills} deleteSkill={props.deleteSkill} />
                    </div>
                    <div className='experience'>
                        Experience
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBody;