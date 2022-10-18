import './App.css';
import Form from './Components/Form';
import { BrowserRouter, Route } from 'react-router-dom';
import FormId from './Components/FormId';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Route path="/">
            <Form />
          </Route>
          <Route path="/:id">
            <FormId />
          </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
