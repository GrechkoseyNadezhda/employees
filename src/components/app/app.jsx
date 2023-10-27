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
                    rise: false,
                    id: 1,
                },
                {
                    name: "Alex",
                    salary: 5000,
                    increase: true,
                    rise: false,
                    id: 2,
                },
                {
                    name: "Carl",
                    salary: 3000,
                    increase: false,
                    rise: false,
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
            rise: false,
            id: this.maxId,
        };

        this.setState(({ data }) => {
            return {
                data: [...data, newItem],
            };
        });
        this.maxId = this.maxId + 1;
    };
    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };

    render() {
        const countIncrease = this.state.data.filter(
            (item) => item.increase === true
        ).length;
        return (
            <div className="app">
                <AppInfo data={this.state.data} countIncrease={countIncrease} />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm addItem={this.addItem} />
            </div>
        );
    }
}

export default App;
