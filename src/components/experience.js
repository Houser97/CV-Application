
const Experience = (props) => {
    const {titleActivity, year, company, description, year2} = props;
    return(
        year.map(
            function iterateYear(item, iterator){
            return(        
            <li className="LI-experience">
                <svg  viewBox="0 0 24 24" id={iterator} className = "delete-experience-button" onClick={props.deleteExperience}>
                    <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
                </svg>
                <span className="effect-line-experience"><div className="circle-effect"></div></span>
                <div className="title-experience experience-DIVS" key={`${iterator}j`}>{titleActivity[iterator]}</div>
                <div className="years-company">
                    From 
                    <div className="year-experience years-company-DIVS" key={`${iterator}k`}>{year[iterator]}</div>
                    to 
                    <div className="year-experience years-company-DIVS" key={`${iterator}a`}>{year2[iterator]}</div>
                    | 
                    <div className="company-experience years-company-DIVS" key={`${iterator}l`}>{company[iterator]}</div>
                </div>
                <div className="description-experience experience-DIVS" key={`${iterator}m`}>{description[iterator]}</div>
            </li>)
        }
        )

    )
}

export default Experience;