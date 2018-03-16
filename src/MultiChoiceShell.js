import React from 'react';
import fixtureData from './fixtureData';
import MultiChoiceAnswer from './MultiChoiceAnswer'

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

    let theQuestions = questObj.questions.map((question, i) => {
      return (
        <MultiChoiceAnswer
          question={question.text}
        />
      )
    })

    return (
      <div style={{position: "relative", margin: "0 auto", width: "50vw", backgroundColor: "pink", height: "500px", marginTop: "100px", paddingTop: "30px"}}>
      {questObj.title}
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit()
          }}
        >
          {theQuestions}
          <button style={{position:"absolute", bottom: "5px", right: "5px", "zIndex":10}}type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default MultiChoiceShell;
