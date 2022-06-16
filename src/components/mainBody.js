import PersonalData from './personalData';

const MainBody = (props) => {
    const {name, career, cel, email} = props;
    return (
        <div className="mainBody">
            <div className="CV">
                <div className="name-user">{name}</div>
                <PersonalData career={career} cel={cel} email={email} />
            </div>
        </div>
    )
}

export default MainBody;