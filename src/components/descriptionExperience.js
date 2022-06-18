const DescriptionExperience = (props) =>{
    const {description} = props;
    return(
        description.map(
            function(item, iterator){
                return(
                    <div key={iterator.toString()} className="description-experience">{item}</div>
                )
            }
        )
    )
}

export default DescriptionExperience;