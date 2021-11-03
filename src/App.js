import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend} from 'react-dnd-html5-backend';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Dashboard/>
      </div>
    </DndProvider>    
  );
}

export default App;
