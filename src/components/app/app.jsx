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
            filteredData: [],
            term: "",
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

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1;
        });
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    onFilterEmp = (param) => {
        this.setState(({ data }) => {
            if (param === "salary") {
                return {
                    filteredData: data.filter((item) => item.salary > 1000),
                };
            }
            if (param === "grow") {
                return {
                    filteredData: data.filter((item) => item.increase === true),
                };
            }
            if (param === "all") {
                return {
                    filteredData: data,
                };
            }
        });
    };

    render() {
        const { data, term, filteredData } = this.state;
        const countIncrease = data.filter(
            (item) => item.increase === true
        ).length;
        let visibleData;
        if (filteredData.length) {
            visibleData = this.searchEmp(filteredData, term);
        } else {
            visibleData = this.searchEmp(data, term);
        }

        return (
            <div className="app">
                <AppInfo data={visibleData} countIncrease={countIncrease} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter onFilterEmp={this.onFilterEmp} />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm addItem={this.addItem} />
            </div>
        );
    }
}

export default App;
