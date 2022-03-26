import ApInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employess-add-form/employees-add-form';

import './app.css';

function App() {
  return (
    <div className="app">
      <ApInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeesList/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;