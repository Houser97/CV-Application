const TitleExperience = (props) => {
    const {titleActivity} = props;
    return(
        titleActivity.map(
            function iterateTitles(item, iterator){
                return(
                    <div key={iterator.toString()} className="title-experience">{item}</div>
                )
            }
        )
        
    )
}

export default TitleExperience;