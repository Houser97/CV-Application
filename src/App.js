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
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
  }


  render(){
    const {title, name} = this.state;

    return (
      <div className='bodyApp'>
        <Title title={title}/>
        <div className='navBar-and-mainBody'>
          <NavBar name={name} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          <MainBody name={name}/>
        </div>
      </div>
    );
  }

}

export default App;
