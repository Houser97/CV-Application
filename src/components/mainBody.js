const MainBody = (props) => {
    const {name} = props;
    return (
        <div className="mainBody">
            <div className="CV">
                <div className="name-user">{name}</div>
            </div>
        </div>
    )
}

export default MainBody;