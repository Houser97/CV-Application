
const Experience = (props) => {
    const {titleActivity, year, company, description} = props;
    return(
        year.map(
            function iterateYear(item, iterator){
            return(        
            <li>
                <div key={`${iterator}j`}>{titleActivity[iterator]}</div>
                <div key={`${iterator}k`}>{year[iterator]}</div>
                <div key={`${iterator}l`}>{company[iterator]}</div>
                <div key={`${iterator}m`}>{description[iterator]}</div>
            </li>)
        }
        )

    )
}

export default Experience;