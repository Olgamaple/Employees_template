import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button 
          className="btn btn-light"
          type="button">
            All employees
      </button>
      <button 
          className="btn btn-outline-light"
          type="button">
            To be promoted 
      </button>
      <button 
          className="btn btn-outline-light"
          type="button">
            Salary over $1.000
      </button>
      </div>
  );
}

export default AppFilter;