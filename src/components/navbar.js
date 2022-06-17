const NavBar = (props) => {
    const {name, career, cel, email, skills} = props;
    return (
        <div className="navBar">
            <form onSubmit={props.handleSubmit}>
                <div className="DIV-input-and-label">
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" value={name} onChange={props.handleChange}></input>
                </div>
                <div className="DIV-input-and-label">
                    <label htmlFor="career">Career</label>
                    <input name="career" id="career" value={career} onChange={props.handleChange}></input>
                </div>
                <div className="DIV-input-and-label">
                    <label htmlFor="cel">Celphone number</label>
                    <input name="cel" id="cel" value={cel} onChange={props.handleChange}></input>
                </div>
                <div className="DIV-input-and-label">
                    <label htmlFor="email">E-mail</label>
                    <input name="email" id="email" value={email} onChange={props.handleChange}></input>
                </div>
                <div className="addNewSkill" onClick={props.openSkillForm}>Add Skill</div>
            </form>
        </div>
    )
}

export default NavBar;