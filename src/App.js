import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import {React, useState , useEffect , useMemo} from 'react'

const App = () => {
  
  const [name, setName] = useState();
  const [state, setState] = useState(
    {
      name : "",
      selected : false,
      city : 'seoul'
    }
  );

  const user = useMemo( () => ({
    name : state.name,
    selected : state.selected

  }) , [state.name, state.selected] );

  useEffect( () => {
    console.log(`useEffect runs! = ${state}`);
  } , [state.name, state.selected] );

  const temp = (val) => {
     setName(val);
  };

  const AddName = () => {
    //setName(val);
    setState( (prev) => {
      return {...prev, name }
    } );
  };

  const AddState = () => {
    setState( (prev) => ({ ...prev , selected : true}) );
  };

  return (
    <div>

      <input onChange = {(e) =>  setName(e.target.value) } /> <br/>
      <button onClick={AddName} >Name</button>
      <button onClick={AddState} >State</button>
      <br/><br/>
      {
        ` name : ${state.name} // 
        selected : ${state.selected}`
      }

    </div>
  )
}

export default App