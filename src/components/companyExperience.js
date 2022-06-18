const CompanyExperience = (props) =>{
    const {company} = props;
    return(
        company.map(
            function iteratCompany(item, iterator){
                return(
                    <div key={iterator.toString()} className="company-experience">{item}</div>
                )
            }
        )
    )
}

export default CompanyExperience;