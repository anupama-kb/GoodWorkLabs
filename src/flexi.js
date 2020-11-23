
import React, { Component } from 'react'
import css from './App.css'
import InputTextField from './InputTextField'
import DropDownSelect from './DropDownSelect'

export default class flexi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      selectedValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
 
  }


  handleChange(event){
    this.setState({title: event.target.value})
  }

  onChange(event){ 
    this.setState({selectedValue: event.target.value})
  }
  
  render() {
   
    const { config, onFlexiSubmit } = this.props
    console.log("prop",this.state)

    return (
        <div className = "flex-outer">
          <form onSubmit={ (e) => this.props.onFlexiSubmit(e, this.state)}>
            {config.items.map(form => {
              if( form.type === "TextField") {
                return(
                  <InputTextField
                  name= {form.name}
                  label={form.label}
                  type = {form.type}
                  title = {this.state.title}
                  handleChange = {this.handleChange}
                  />
                )
              }

              if( form.type === "DropDown") {
                return (
                  <DropDownSelect 
                    name={form.name}
                    type={form.type}
                    values={form.values}
                    placeholder={form.label}
                    onChange = {this.onChange}
                  />
                )
              }
            })}

           <input type="submit" />
        </form>
       </div>
    )
  }
}
