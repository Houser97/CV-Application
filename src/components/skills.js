const Skills = (props) => {
    const {skills, difficulty} = props;
    return(
        skills.map(
            function iterate(item, iterator){
                return(
                        <div className='singleSkill' key={iterator.toString()}>
                            {item}
                            <span className='bar'><span className={`Beginner ${difficulty[iterator]}`}></span></span>
                            <button id={iterator.toString()} onClick={props.deleteSkill}>X</button>
                        </div>

                )

            }
        )
    )
}

export default Skills;