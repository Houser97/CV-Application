import React from 'react';
import Title from './components/title'
import NavBar from './components/navbar';
import MainBody from './components/mainBody';
import SkillsForm from './components/skillsForm';
import ExperienceForm from './components/experienceForm';
import EditExperienceForm from './components/editExperience';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'CV Application',
      name: "John Doe",
      career:"Master in John Doe",
      cel:"555-555-5555",
      email:"johnDoe@gmail.com",
      skills: [],
      difficulty: [],
      titleActivity: [],
      year: [],
      year2: [],
      company: [],
      description: [],
      currentId: "",
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
    this.deleteExperience= this.deleteExperience.bind(this);
    this.openEditExperienceForm = this.openEditExperienceForm.bind(this);
    this.handleSubmitExperienceEdit = this.handleSubmitExperienceEdit.bind(this);
    this.closeEditExperienceForm = this.closeEditExperienceForm.bind(this);
  }

  closeEditExperienceForm(e){
    const experienceForm = document.querySelector(".DIV-experienceEditForm");
    experienceForm.style.display = "none"
  }

  handleSubmitExperienceEdit(e){
    e.preventDefault();
    const title = [...e.target][0].value;
    const year = [...e.target][1].value;
    const year2 = [...e.target][2].value;
    const company = [...e.target][3].value;
    const description = [...e.target][4].value;

    let currentTitleArray = this.state.titleActivity;
    let currentYearArray = this.state.year;
    let currentYear2Array = this.state.year2;
    let currentCompanyArray = this.state.company;
    let currentDescriptionArray = this.state.description;

    currentTitleArray[this.state.currentId] = title;
    currentYearArray[this.state.currentId] = year;
    currentYear2Array[this.state.currentId] = year2;
    currentCompanyArray[this.state.currentId] = company;
    currentDescriptionArray[this.state.currentId] = description;


    this.setState({
      titleActivity: [...currentTitleArray],
      year: [...currentYearArray],
      year2: [...currentYear2Array],
      company: [...currentCompanyArray],
      description: [...currentDescriptionArray]
    })
    e.target.reset();
    const DIVform = document.querySelector(".DIV-experienceEditForm");
    DIVform.style.display = "none";
  }

  openEditExperienceForm(e){
    let id = parseInt(e.target.id);
    const editForm = document.querySelector(".DIV-experienceEditForm");
    editForm.style.display = "flex";
    let title = document.getElementById("titleEdit");
    let year = document.getElementById("yearEdit");
    let year2 = document.getElementById("year2Edit");
    let company = document.getElementById("companyEdit");
    let description = document.getElementById("descriptionEdit");

    title.value = this.state.titleActivity[id];
    year.value = this.state.year[id];
    year2.value = this.state.year2[id];
    company.value = this.state.company[id];
    description.value = this.state.description[id];

    this.setState({
      currentId: id,
    })

  }

  deleteExperience(e){
    const id = e.target.id;
    this.setState({
      titleActivity: [...this.state.titleActivity.slice(0, id), ...this.state.titleActivity.slice(id+1)],
      year: [...this.state.year.slice(0, id), ...this.state.year.slice(id+1)],
      year2: [...this.state.year2.slice(0, id), ...this.state.year2.slice(id+1)],
      company: [...this.state.company.slice(0, id), ...this.state.company.slice(id+1)],
      description: [...this.state.description.slice(0, id), ...this.state.description.slice(id+1)],
    })

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
  }

  handleSubmitSkill(e){
    e.preventDefault();
    const difficulty = [...e.target][1].value;
    const skill = [...e.target][0].value;
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
            titleActivity ={titleActivity} year = {year} company = {company} description ={description} year2 = {year2}
            deleteExperience = {this.deleteExperience} openEditExperienceForm = {this.openEditExperienceForm}/>
            <SkillsForm handleSubmitSkill={this.handleSubmitSkill} closeSkillForm = {this.closeSkillForm} />
            <ExperienceForm handleSubmitExperience = {this.handleSubmitExperience} closeExperienceForm = {this.closeExperienceForm} />
            <EditExperienceForm handleSubmitExperienceEdit = {this.handleSubmitExperienceEdit} closeEditExperienceForm = {this.closeEditExperienceForm} />
          </div>
        </div>  
      </div>
    );
  }

}

export default App;
