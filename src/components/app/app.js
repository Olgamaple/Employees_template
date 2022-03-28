import ApInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employess-add-form/employees-add-form';

import './app.css';

function App() {
  const data = [
    {name: 'Natalie', salary: 1000, increase: false, id: 1},
    {name: 'Ariel', salary: 800, increase: true, id: 2},
    {name: 'Etienne', salary: 650, increase: false, id: 3},
  ];


  return (
    <div className="app">
      <ApInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeesList data={data}/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;