import React from 'react';
import Title from './components/title'
import NavBar from './components/navbar';
import MainBody from './components/mainBody';
import SkillsForm from './components/skillsForm';
import ExperienceForm from './components/experienceForm';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'CV Application',
      name: "",
      career:"",
      cel:"",
      email:"",
      skills: [],
      difficulty: [],
      titleActivity: [],
      year: [],
      year2: [],
      company: [],
      description: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitSkill = this.handleSubmitSkill.bind(this);
    this.handleChangeSkill = this.handleChangeSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.getDifficultyValue = this.getDifficultyValue.bind(this);
    this.openSkillForm = this.openSkillForm.bind(this);
    this.openExperienceForm = this.openExperienceForm.bind(this);
    this.handleSubmitExperience = this.handleSubmitExperience.bind(this);
    this.navBarDisplay = this.navBarDisplay.bind(this);
    this.navBarDisplayNot = this.navBarDisplayNot.bind(this);
    this.closeSkillForm = this.closeSkillForm.bind(this);
    this.closeExperienceForm = this.closeExperienceForm.bind(this);
  }

  closeSkillForm(e) {
    const skillsForm = document.querySelector(".DIV-skillsForm");
    skillsForm.style.display = "none"
  }

  closeExperienceForm(e){
    const experienceForm = document.querySelector(".DIV-experienceForm");
    experienceForm.style.display = "none"
  }

  navBarDisplay(e){
    const navBar = document.querySelector(".navBar");
    navBar.style.width = "380px";
    navBar.style.padding = "10px"
    const openNavbar = document.querySelector(".menu-button-closed");
    openNavbar.style.display = "none"
    const closeNavbar = document.querySelector(".menu-button-opened");
    closeNavbar.style.display = "flex"
    const formNavBar = document.getElementById("form-navbar");
    formNavBar.style.display = "flex"
    console.log("click")
  }

  navBarDisplayNot(e){
    const navBar = document.querySelector(".navBar");
    navBar.style.width = "0px";
    navBar.style.padding = "0px"
    const closeNavbar = document.querySelector(".menu-button-opened");
    closeNavbar.style.display = "none"
    const openNavbar = document.querySelector(".menu-button-closed");
    openNavbar.style.display = "flex"
    const formNavBar = document.getElementById("form-navbar");
    formNavBar.style.display = "none"
  }

  handleSubmitExperience(e){
    e.preventDefault();
    const title = [...e.target][0].value;
    const year = [...e.target][1].value;
    const year2 = [...e.target][2].value;
    const company = [...e.target][3].value;
    const description = [...e.target][4].value;
    this.setState({
      titleActivity: this.state.titleActivity.concat(title),
      year: this.state.year.concat(year),
      company: this.state.company.concat(company),
      description: this.state.description.concat(description),
      year2: this.state.year2.concat(year2)
    })
    e.target.reset();
    console.log(this.state.titleActivity)
    const DIVform = document.querySelector(".DIV-experienceForm");
    DIVform.style.display = "none";
  }

  openExperienceForm(e){
    const DIVform = document.querySelector(".DIV-experienceForm")
    DIVform.style.display = "flex";
  }

  openSkillForm(e){
    const DIVform = document.querySelector(".DIV-skillsForm");
    DIVform.style.display = "flex";
  }

  getDifficultyValue(e){
    this.setState({
      difficulty: this.state.difficulty.concat(e.target.value)
    })
    console.log(e.target.value)
  }

  deleteSkill(e){
    const id = parseInt(e.target.id);
    this.setState({
      skills: [...this.state.skills.slice(0, id), ...this.state.skills.slice(id+1)],
      difficulty: [...this.state.difficulty.slice(0, id), ...this.state.difficulty.slice(id+1)]
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleChangeSkill(e){
    this.setState(
      {
        skills: this.state.skills.concat(e.target.value),
      }
    )
    e.target.value = "";
    console.log("changeSkill");
  }

  handleSubmitSkill(e){
    e.preventDefault();
    const difficulty = [...e.target][1].value;
    const skill = [...e.target][0].value;
    console.log(skill)
    this.setState({
      skills: this.state.skills.concat(skill),
      difficulty: this.state.difficulty.concat(difficulty)
    })
    e.target.reset();
    const DIVform = document.querySelector(".DIV-skillsForm");
    DIVform.style.display = "none";
  }

  handleSubmit(e) {
    e.preventDefault();
  }


  render(){
    const {title, name, career, cel, email, skills, difficulty, titleActivity, year, year2, company, description} = this.state;
    /*const {career, cel, email} = this.state.personalData;*/
    return (
      <div className='bodyApp'>
        <Title title={title} navBarDisplay={this.navBarDisplay} navBarDisplayNot={this.navBarDisplayNot}/>
        <div className='fullHeight'>
          <div className='navBar-and-mainBody'>
            <NavBar name={name} cel={cel} career={career} email={email} handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} getDifficultyValue = {this.getDifficultyValue} openSkillForm={this.openSkillForm}
            openExperienceForm = {this.openExperienceForm}/>
            <MainBody name={name} cel={cel} career={career} email={email} 
            skills = {skills} deleteSkill ={this.deleteSkill} difficulty={difficulty}
            titleActivity ={titleActivity} year = {year} company = {company} description ={description} year2 = {year2}/>
            <SkillsForm handleSubmitSkill={this.handleSubmitSkill} closeSkillForm = {this.closeSkillForm} />
            <ExperienceForm handleSubmitExperience = {this.handleSubmitExperience} closeExperienceForm = {this.closeExperienceForm} />
          </div>
        </div>  
      </div>
    );
  }

}

export default App;
