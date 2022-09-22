import './App.css';
import ContactsTable from './components/ContactsTable/ContactsTable';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1 className='my-5'>Ironhack Contacts</h1>
        <ContactsTable />
      </div>
    </div>
  );
}

export default App;
