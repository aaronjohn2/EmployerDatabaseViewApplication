import * as React from 'react';
import { Card } from 'reactstrap';
import { EditingState } from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableEditRow,
    TableEditColumn,
} from '@devexpress/dx-react-grid-bootstrap4';
import axios from 'axios';

const getRowId = row => row.id;

class EmployeeInfo extends React.PureComponent {
    constructor(props) {
        super(props);
// //id, firstName, lastName, email, position, task, company

        this.state = {
            columns: [
                { name: 'uid', title: 'id' },
                { name: 'first_name', title: 'First Name' },
                { name: 'last_name', title: 'Last Name' },
                { name: 'email', title: 'Email', type: 'email' },
                { name: 'salary', title: 'Salary' },
                { name: 'manager_id', title: 'Manager ID' },
                { name: 'position', title: 'Position' },
                { name: 'company', title: 'Company' },
            ],
            rows: [],
        };

        this.commitChanges = this.commitChanges.bind(this);
    }


    commitChanges({ added, changed, deleted }) {
        let { rows } = this.state;
        console.log('added', added);
        console.log('changed', changed)
        // const data = added[0];
        // axios.post('http://localhost:3001/data', data)
        //     .then((data) => console.log(data))
        //     .catch(err => console.log(err))

        if (added) {
            if (added[0]) {

            }
            console.log('added', added);
            const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
            rows = [
                ...rows,
                ...added.map((row, index) => ({
                    id: startingAddedId + index,
                    ...row,
                })),
            ];
        }
        if (changed) {
            rows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
        }
        if (deleted) {
            const deletedSet = new Set(deleted);
            rows = rows.filter(row => !deletedSet.has(row.id));
        }
        this.setState({ rows });
    }

    render() {
        const { rows, columns } = this.state;
        return (
            <Card>
                <Grid
                    rows={rows}
                    columns={columns}
                    getRowId={getRowId}
                >
                    <EditingState
                        onCommitChanges={this.commitChanges}
                    />
                    <Table />
                    <TableHeaderRow />
                    <TableEditRow />
                    <TableEditColumn
                        showAddCommand
                        showEditCommand
                        showDeleteCommand
                    />
                </Grid>
            </Card>
        );
    }
}

export default EmployeeInfo;



// // Author: Tahsin Hossain, Raghav Gupta;
// import React, { Component } from 'react';
// // import './AddManager.css';
//
// class EmployeeInfo extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             title: 'Employer Database View Application',
//             act: 0,
//             index: '',
//             info: [],
//             data: {
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 id: '',
//                 position: '',
//                 salary: '',
//                 managerID: '',
//                 company:'',
//             }
//         }
//     }
//
// //adding new employee information
//     addInfo = (e) =>{
//         e.preventDefault();
//
//         const info = this.state.info;
//         const id = this.refs.id.value;
//         const firstName = this.refs.firstName.value;
//         const lastName = this.refs.lastName.value;
//         const email = this.refs.email.value;
//         const position = this.refs.position.value;
//         const salary = this.refs.salary.value;
//         const company = this.refs.company.value;
//
//
//
//         if(this.state.act === 0){
//             const inf = {
//                 id, firstName, lastName, email, position, salary, company
//             };
//             info.push(inf);
//         }else{
//             const index = this.state.index;
//             info[index].id = id;
//             info[index].firstName = firstName;
//             info[index].lastName = lastName;
//             info[index].email = email;
//             info[index].position = position;
//             info[index].salary = salary;
//             info[index].company = company;
//         }
//
//         this.setState({
//             info: info,
//             act: 0
//         });
//
//         this.refs.myForm.reset();
//
//     };
//
//     updateInfo = (i) => {   //updating existing information
//         const inf = this.state.info[i];
//         this.refs.id.value = inf.id;
//         this.refs.firstName.value = inf.firstName;
//         this.refs.lastName.value = inf.lastName;
//         this.refs.email.value = inf.email;
//         this.refs.position.value = inf.position;
//         this.refs.salary.value = inf.salary;
//         this.refs.company.value = inf.company;
//
//         this.setState({
//             act: 1,
//             index: i
//         });
//
//
//     };
//
//     deleteInfo = (i) => {     //deleting employee information
//         const info = this.state.info;
//         info.splice(i,1);
//         this.setState({
//             info: info
//         });
//
//         this.refs.myForm.reset();
//
//     };
//
// //id, firstName, lastName, email, position, task, company
//
//     render() {
//         const info = this.state.info;
//         return (
//             <div className="App">
//                 <h2>{this.state.title}</h2>
//                     <input type="text" ref="id" placeholder="id" className="formField" />
//                     <input type="text" ref="firstName" placeholder="firstName" className="formField" />
//                     <input type="text" ref="lastName" placeholder="lastName" className="formField" />
//                     <input type="text" ref="email" placeholder="email" className="formField" />
//                     <input type="text" ref="position" placeholder="position" className="formField" />
//                     <input type="text" ref="salary" placeholder="salary" className="formField" />
//                     <input type="text" ref="company" placeholder="company" className="formField" />
//                     <button onClick={(e)=>this.addInfo(e)} className="myButton">submit </button>
//                 <pre>
//           {info.map((inf, i) =>
//               <li key={i} className="myList">
//                   {i+1}. {inf.id}, {inf.firstName}, {inf.lastName}, {inf.email}, {inf.position}, {inf.salary}, {inf.company}
//                   <button onClick={()=>this.deleteInfo(i)} className="myListButton">remove </button>
//                   <button onClick={()=>this.updateInfo(i)} className="myListButton">edit </button>
//               </li>
//           )}
//         </pre>
//             </div>
//         );
//     }
// }
// export default EmployeeInfo;