import './App.css';
// import MyComponent from './components/MyComponent'
import Kitten from './components/Kitten'
import TypesOfFood from './components/TypesOfFood';
import Fruits from './components/FruitComponents/fruit';
import CurrentDate from './components/CurrentDate';
import Todo from './components/Todo';
import Product from './components/Product';
import FullName from './components/FullName';
import Counter from './components/SimpleCounter';
import Input from './components/Input';
import ControlledForm from './components/ControlledForm';
import MyApp from './components/MyApp';
import ReactController from './components/ReactController';
import MagicEightBall from './components/MagicEightBall';
import CheckUserAge from './components/UserAge';

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

      {/* <MyComponent /> */}
      <Kitten />
      <TypesOfFood />
      <Fruits />
      <CurrentDate />
      <Todo />
      <Product />
      <p>We used state here: <span><FullName /></span></p>

      <Counter />
      <Input />

      <ControlledForm />

      <MyApp />
      <ReactController />
      <MagicEightBall />
      <CheckUserAge />
    </div>


  );
}

export default App;
