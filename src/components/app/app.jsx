import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: "John",
                    salary: 800,
                    increase: false,
                    id: 1,
                },
                {
                    name: "Alex",
                    salary: 5000,
                    increase: true,
                    id: 2,
                },
                {
                    name: "Carl",
                    salary: 3000,
                    increase: false,
                    id: 3,
                },
            ],
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => item.id !== id),
            };
        });
    };

    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            id: this.maxId,
        };

        this.setState(({ data }) => {
            return {
                data: [...data, newItem],
            };
        });
        this.maxId = this.maxId + 1;
    };

    render() {
        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EmployeesAddForm addItem={this.addItem} />
            </div>
        );
    }
}

export default App;
