// import logo from './logo.svg';
import './App.css';
import Func_JSX_DuongVanHao from './components/Func_JSX_DuongVanHao';

function App() {
  return (
      <section className="App">
        <h1>Demo JSX</h1>
        {/* function component demo */}
        <Func_JSX_DuongVanHao />
        <Func_JSX_DuongVanHao fullName="Duong Van Hao 2" age="21" />
      </section>
  );
}

export default App;