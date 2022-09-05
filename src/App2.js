import {React, useEffect, useState} from 'react'

const App2 = () => {

    const [timer, setTimer] = useState(0);

    useEffect( () => {
        console.log('effect');
        setInterval( () => { 
            setTimer((prev) => prev + 1 ) ;
            //console.log(`prev  = ${prev} `);
        }, 1000 )

    } , []);


    //setTimeout(() => { setTimer((prev) => prev + 1 ) }, 1000);

  return (
    <div>

        <h1>{timer}abcefbcdwg</h1>
    </div>
  )
}

export default App2