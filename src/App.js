import './App.css';
import MyComponent from './components/MyComponent'
import Kitten from './components/Kitten'
import TypesOfFood from './components/TypesOfFood';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>

      {/* Define an HTML Class in JSX */}
      <div className="myDiv">
        <h1>Add a class to this div</h1>
      </div>

      {/* Learn About Self-Closing JSX Tags */}
      <div>
        <h2>Welcome to React!</h2><br />
        <p>Be sure to close all tags!</p>
        <hr />
      </div>

      <MyComponent />
      <Kitten />
      <TypesOfFood />

    </div>


  );
}

export default App;
