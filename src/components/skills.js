const Skills = (props) => {
    const {skills} = props;
    return(
        skills.map(
            function iterate(item, iterator){
                return(
                        <div className='singleSkill' key={iterator.toString()}>
                            {item}
                            <span className='bar'><span className='beginner'></span></span>
                            <button id={iterator.toString()} onClick={props.deleteSkill}>X</button>
                        </div>

                )

            }
        )
    )
}

export default Skills;