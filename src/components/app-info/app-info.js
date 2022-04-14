import './app-info.css';

const AppInfo = (increased, employees) => {
  return(
    <div className="app-info">
      <h1>Employee records at Ellen & Guys</h1>
      <h2>Total number of employees: {employees}</h2>
      <h2>Best employees of the month: {increased}</h2>
    </div>
  );
}

export default AppInfo;