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

        this.loadData();
        this.state = {
            columns: [
                { name: 'uid', title: 'ID' },
                { name: 'first_name', title: 'First Name' },
                { name: 'last_name', title: 'Last Name' },
                { name: 'email', title: 'Email' },
                { name: 'salary', title: 'Salary' },
                { name: 'manager_id', title: 'Manager ID' },
                { name: 'position', title: 'Position' },
                { name: 'company', title: 'Company' },
            ],
            rows: [],
        };

        this.commitChanges = this.commitChanges.bind(this);
    }

    checkData = (data) => {
        Object.keys(data).forEach(key => {
            data[key] = data[key].trim();
        });

        const {
            uid, first_name, last_name, email, salary, manager_id, position, company
        } = data

        if (!uid || uid === '') {
            alert('ID cannot be left blank')
            return false;
        }

        if (!first_name || first_name === '') {
            alert('First Name cannot be left blank')
            return false;
        }

        if (!last_name || last_name ==='') {
            alert('Last Name cannot be left blank')
            return false;
        }
        if (!email || email === '') {
            alert('Email cannot be left blank')
            return false;
        }
        if (!salary || salary === '') {
            alert('Salary cannot be left blank')
            return false;
        }
        if (!manager_id || manager_id ==='') {
            alert('Manager id cannot be left blank')
            return false;
        }
        if (!position || position === '') {
            alert('Position cannot be left blank')
            return false;
        }
        if (!company || company ==='') {
            alert('Company name cannot be left blank')
            return false;
        }

        if (!(!isNaN(parseFloat(salary)) && isFinite(salary))) {
            alert('salary can only contain numbers');
            return false;
        }

        data.salary = parseInt(salary);
        //console.log(data);

        return true;
    }



    commitChanges({ added, changed, deleted }) {
        let { rows } = this.state;
        // const data = added[0];
        // axios.post('http://localhost:3001/data', data)
        //     .then((data) => console.log(data))
        //     .catch(err => console.log(err))

        if (added) {
            let data = added[0];

            if (this.checkData(data)) {
                //data = this.checkData(data);

                axios.post('http://localhost:3001/data', data)
                    .then((res) => {
                        if(res.data._id) {
                            console.log(res);
                            const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
                            rows = [
                                ...rows,
                                ...added.map((row, index) => ({
                                    id: startingAddedId + index,
                                    ...row,
                                })),
                            ];
                            console.log(rows);
                            this.setState({ rows });
                        }
                        else {
                            alert('unable to add. please check the data you entered');
                        }
                    })
                    .catch(err => console.log(err))
            }
        }
        if (changed) {
            rows.map(row => {
                if (changed[row.id]) {
                    let data = {
                        ...row,
                        ...changed[row.id]
                    };
                    delete data['id'];
                    data.salary = `${data.salary}`;
                    if (this.checkData(data)) {
                        const id = data._id;
                        delete data['_id']
                        axios.put(`http://localhost:3001/data/${id}`, data)
                            .then(res => {
                                if (res.status === 200) {
                                    rows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
                                    this.setState({ rows });
                                }
                            });
                    }
                }
            });
        }
        if (deleted) {
            rows.map(row => {
                if (deleted[0] === row.id) {
                    axios.delete(`http://localhost:3001/data/${row._id}`)
                        .then(res => {
                            if (res.status === 200) {
                                const deletedSet = new Set(deleted);
                                rows = rows.filter(row => !deletedSet.has(row.id));
                                this.setState({ rows });
                            }
                        });
                };
            })


        }
    }

    loadData = () => {
        axios.get('http://localhost:3001/data') //endpoint route
            .then(res => {
                if(res.status === 200) {
                    const rows = res.data;
                    let newRowsState = [];
                    rows.forEach((row, index) => {
                        const {
                            uid, first_name, last_name, email, salary, manager_id, position, company, _id
                        } = row;

                        newRowsState.push({ //pushing data to new const newRowState
                            _id, uid, first_name, last_name, email, salary, manager_id, position, company,
                            id: index
                        })
                    })

                    this.setState({ rows: newRowsState})
                } else {
                    alert('unable to fetch data, try again');
                }
            })
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
