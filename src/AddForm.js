import React, { Component } from 'react';


class AddForm extends Component {
  state = {
    content:''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content:''
    })
  }

  render(){
    return(
      <div className='addTodo'>
        <form onSubmit={this.handleSubmit}>
          <lable>Add new todo:</lable>
          <input type="text" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default AddForm;
