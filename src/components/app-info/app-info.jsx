import "./app-info.css";

const AppInfo = ({ data, countIncrease }) => {
    return (
        <div className="app-info">
            <h1>Облік співробітників у компанії</h1>
            <h2>{"Загальна кількість співробітників: " + data.length}</h2>
            <h2>{"Премію отримають: " + countIncrease}</h2>
        </div>
    );
};

export default AppInfo;
