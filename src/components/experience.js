
const Experience = (props) => {
    const {titleActivity, year, company, description} = props;
    return(
        year.map(
            function iterateYear(item, iterator){
            return(        
            <li className="LI-experience">
                <div className="title-experience experience-DIVS" key={`${iterator}j`}>{titleActivity[iterator]}</div>
                <div className="year-experience experience-DIVS" key={`${iterator}k`}>{year[iterator]}</div>
                <div className="company-experience experience-DIVS" key={`${iterator}l`}>{company[iterator]}</div>
                <div className="description-experience experience-DIVS" key={`${iterator}m`}>{description[iterator]}</div>
            </li>)
        }
        )

    )
}

export default Experience;