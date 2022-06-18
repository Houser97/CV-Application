const Years = (props) => {
    const {year} = props;
    return(
        year.map(
            function iterateYears(item, iterator){
                return(
                    <div key={iterator.toString()} className="years-experience">{item}</div>
                )
            }
        )
    )
}

export default Years;