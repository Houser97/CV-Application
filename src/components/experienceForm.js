const ExperienceForm = (props) => {
    return(
        <div className="DIV-experienceForm" onSubmit={props.handleSubmitExperience}>
            <form id="experienceForm">
                <div className="DIV-title-experience DIV-experience">
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" required></input>
                </div>
                <div className="DIV-year-experience DIV-experience">
                    <label htmlFor="year">Years</label>
                    <input id="year" name="year" required></input>
                </div>
                <div className="DIV-company-experience DIV-experience">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" required></input>
                </div>
                <div className="DIV-description-experience DIV-experience">
                    <label htmlFor="description">Description</label>
                    <input id="description" name="description" required></input>
                </div>
                <button id="button-experience">Add Experience</button>
            </form>
        </div>
    )
}

export default ExperienceForm;