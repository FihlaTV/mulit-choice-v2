import React from 'react';
import fixtureData from './fixtureData';

class MultiChoiceShell extends React.Component{
  constructor(props){
    super(props)
    this.state ={

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    console.log("handleSubmit")
  }

  render(){

    let questObj = fixtureData[0].lessons[0].questions[0]
    console.log("questObj", questObj)
    return (
      <div style={{position: "relative", margin: "0 auto", width: "50vw", backgroundColor: "pink", height: "500px", marginTop: "100px"}}>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit()
          }}
        >

          <button style={{position:"absolute", bottom: "5px", right: "5px", "zIndex":10}}type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default MultiChoiceShell;
