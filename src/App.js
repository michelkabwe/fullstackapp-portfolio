import {useState, useEffect} from 'react'; 
import {db} from '-/firebase-config';
import {collection, getDocs} from 'firebase/firestore';
import './App.css';


function App() {
const [users,setUsers] = useState([]);
const usersCollectionRef = collection(db,"users")  // ref to db m

//getDOcs return alla the documents
  useEffect(()=> {
    const getUSers = async () => {
      const data = await getDocs(usersCollectionRef)
      console.log(data)

    }
    getUSers()
  },[])
  return (
    
    <div className="App">
    </div>
  );
}

export default App;
