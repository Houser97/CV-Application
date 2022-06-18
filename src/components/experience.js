
const Experience = (props) => {
    const {titleActivity, year, company, description, year2} = props;
    return(
        year.map(
            function iterateYear(item, iterator){
            return(        
            <li className="LI-experience">
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