import React from 'react';

class MultiChoiceAnswer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      }
    }
    render() {
      let { question } = this.props;
      return (
        <div>

          {question}
        </div>
      )
  }
}

export default MultiChoiceAnswer;
