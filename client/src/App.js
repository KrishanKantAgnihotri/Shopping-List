
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/AppNavbar";
import ShoppingList from './components/ShoppingList';
import AddItemModal from './components/AddItemModal';
import {Provider} from 'react-redux';
import store from './store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <AppNavbar/>
     <AddItemModal/>
     <ShoppingList/>
     </Provider>
    </div>
  );
}

export default App;
