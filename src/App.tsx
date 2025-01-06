import './App.css';
import { Countries, User } from './Person';
import { UserProvider } from './UserContextProvider';

function App() {

  return (
    <UserProvider>
      <User name={"TheOne"} age={22} isMarried={true} country={Countries.Brazil} />
      <User name={"Ramses"} age={34} isMarried={true} country={Countries.India} />
    </UserProvider>
  )
}

export default App
