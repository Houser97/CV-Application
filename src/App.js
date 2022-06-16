import React from 'react';
import Title from './components/title'
import NavBar from './components/navbar';
import MainBody from './components/mainBody';
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
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
  }


  render(){
    const {title, name, career, cel, email} = this.state;
    /*const {career, cel, email} = this.state.personalData;*/

    return (
      <div className='bodyApp'>
        <Title title={title}/>
        <div className='navBar-and-mainBody'>
          <NavBar name={name} cel={cel} career={career} email={email} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          <MainBody name={name} cel={cel} career={career} email={email}/>
        </div>
      </div>
    );
  }

}

export default App;
