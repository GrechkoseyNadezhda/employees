import "./app-filter.css";
const AppFilter = ({ onFilterEmp }) => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button"
                onClick={() => onFilterEmp("all")}
            >
                Усі співробітники
            </button>
            <button
                className="btn btn-outline-light"
                type="button"
                onClick={() => onFilterEmp("grow")}
            >
                На підвищення
            </button>
            <button
                className="btn btn-outline-light"
                type="button"
                onClick={() => onFilterEmp("salary")}
            >
                З/П від 1000$
            </button>
        </div>
    );
};

export default AppFilter;
