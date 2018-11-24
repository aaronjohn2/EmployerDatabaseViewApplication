// Author: Tahsin Hossain, Raghav Gupta;
import React, { Component } from 'react';
// import './AddManager.css';

class EmployeeInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            title: 'Employer Database View Application',
            act: 0,
            index: '',
            info: []
        }
    }

//adding new employee information
    addInfo = (e) =>{
        e.preventDefault();

        const info = this.state.info;
        const id = this.refs.id.value;
        const firstName = this.refs.firstName.value;
        const lastName = this.refs.lastName.value;
        const email = this.refs.email.value;
        const position = this.refs.position.value;
        const task = this.refs.task.value;
        const storyPoint = this.refs.storyPoint.value;
        const storage = this.refs.storage.value;
        const linkedin = this.refs.linkedin.value;


        if(this.state.act === 0){
            const inf = {
                id, firstName, lastName, email, position, task, storyPoint, storage, linkedin
            };
            info.push(inf);
        }else{
            const index = this.state.index;
            info[index].id = id;
            info[index].firstName = firstName;
            info[index].lastName = lastName;
            info[index].email = email;
            info[index].position = position;
            info[index].task = task;
            info[index].storyPoint = storyPoint;
            info[index].storage = linkedin;
        }

        this.setState({
            info: info,
            act: 0
        });

        this.refs.myForm.reset();

    };

    updateInfo = (i) => {   //updating existing information
        const inf = this.state.info[i];
        this.refs.id.value = inf.id;
        this.refs.firstName.value = inf.firstName;
        this.refs.lastName.value = inf.lastName;
        this.refs.email.value = inf.email;
        this.refs.position.value = inf.position;
        this.refs.task.value = inf.task;
        this.refs.storyPoint.value = inf.storyPoint;
        this.refs.storage.value = inf.storage;
        this.refs.linkedin.value = inf.linkedin;

        this.setState({
            act: 1,
            index: i
        });


    };

    deleteInfo = (i) => {     //deleting employee information
        const info = this.state.info;
        info.splice(i,1);
        this.setState({
            info: info
        });

        this.refs.myForm.reset();

    };

//id, firstName, lastName, email, position, task, storyPoint, storage, linkedin

    render() {
        const info = this.state.info;
        return (
            <div className="App">
                <h2>{this.state.title}</h2>
                <form ref="myForm" className="myForm">
                    <input type="text" ref="id" placeholder="id" className="formField" />
                    <input type="text" ref="firstName" placeholder="firstName" className="formField" />
                    <input type="text" ref="lastName" placeholder="lastName" className="formField" />
                    <input type="text" ref="email" placeholder="email" className="formField" />
                    <input type="text" ref="position" placeholder="position" className="formField" />
                    <input type="text" ref="task" placeholder="task" className="formField" />
                    <input type="text" ref="storyPoint" placeholder="storyPoint" className="formField" />
                    <input type="text" ref="storage" placeholder="storage" className="formField" />
                    <input type="text" ref="linkedin" placeholder="linkedin" className="formField" />
                    <button onClick={(e)=>this.addInfo(e)} className="myButton">submit </button>
                </form>
                <pre>
          {info.map((inf, i) =>
              <li key={i} className="myList">
                  {i+1}. {inf.id}, {inf.firstName}, {inf.lastName}, {inf.email}, {inf.position}, {inf.task}, {inf.storyPoint}, {inf.storage},{inf.linkedin}
                  <button onClick={()=>this.deleteInfo(i)} className="myListButton">remove </button>
                  <button onClick={()=>this.updateInfo(i)} className="myListButton">edit </button>
              </li>
          )}
        </pre>
            </div>
        );
    }
}
export default EmployeeInfo;