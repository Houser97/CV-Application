const NavBar = (props) => {
    const {name} = props;
    return (
        <form className="navBar" onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input name="name" id="name" value={name} onChange={props.handleChange}></input>
            </div>
        </form>
    )
}

export default NavBar;