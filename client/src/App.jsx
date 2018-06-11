import React,{ Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props)

    this.addByOne = this.addByOne.bind(this)
  }

addByOne(){
   document.getElementById("demo").style.color = "red";
}

  render () {
    return (
      <div >
          <br/>
          <h1 id="demo"> Title</h1>
        <input/>
          <br/>
        <button className='button1'onClick={this.addByOne}></button><br/>
      </div>
    )
  }
}
