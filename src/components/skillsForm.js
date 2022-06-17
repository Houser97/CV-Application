const SkillsForm = (props) => {
    return(
        <div className="DIV-skillsForm" onSubmit={props.handleSubmitSkill}>
            <form id="skillsForm">
                <label htmlFor="skill">Skill</label>
                <input name="skill" id="skill"></input>
                <label htmlFor="difficulty">Skill's level</label>
                <select id="difficulty">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Expert</option>
                </select>
                <button id="submitSkill">Add Skill</button>
            </form>
        </div>
    )
}

export default SkillsForm;