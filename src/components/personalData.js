const PersonalData = (props) => {
    const {career, cel, email} = props;
    return(
        <div className="personal-data">
            <div className="career">{career}</div>
            <div className="cel">{cel}</div>
            <div className="email">{email}</div>
        </div>
    )
}

export default PersonalData;