import logo from './logo.svg';
import './App.css';
import Magnifier from './components/Magnifier';

function App() {
  return (
    <div className="App">
      <h1>React Magnifier for React and Nextjs latest</h1>
      <h2>
        Since many of the libraries does not work with the latest version of
        React and Nextjs so I created this component for the community to use
        free
      </h2>
      <code>
        This component needs some changes while integrating in your project as I
        have created this as per my need
      </code>
      {/* add the component with your main component and use it accordingly */}
      <Magnifier imageUrl="https://picsum.photos/300/300" />
    </div>
  );
}

export default App;
