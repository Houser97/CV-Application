const ExperienceForm = (props) => {
    return(
        <div className="DIV-experienceForm" onSubmit={props.handleSubmitExperience}>
            <form id="experienceForm">

               <svg  viewBox="0 0 24 24"  className = "closeExperienceForm" onClick={props.closeExperienceForm}>
                    <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
                </svg>


                <div className="DIV-title-experience DIV-experience">
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" required></input>
                </div>
                <div className="DIV-year-experience DIV-experience">
                    <label htmlFor="year">Starting Year</label>
                    <input id="year" name="year" required></input>
                </div>
                <div className="DIV-year-experience DIV-experience">
                    <label htmlFor="year2">Ending Year</label>
                    <input id="year2" name="year2" required></input>
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