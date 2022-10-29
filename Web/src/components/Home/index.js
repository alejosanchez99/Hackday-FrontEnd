import { useEffect, useState, useRef } from 'react'
import { initWSConnection } from '../../services/utilsWS'
import Metric from '../Metric';
import Calls from '../Metrics/Calls';

const Home = () => {
  const [connection, setConnection] = useState(null);
  const [users, setUsers] = useState([]);
  const latestUser = useRef(null);

  latestUser.current = users;

  useEffect(() => {
    setConnection(initWSConnection('user'))
  }, [])

  useEffect(() => {
    if (connection) {
      /*
      connection.start()
        .then(result => {
          console.log('WS Connected!');

          connection.on('Receive', value => {
            console.log("Hola");
            const updatedUsers = [...latestUser.current];
            updatedUsers.push(value);

            console.log(value);

            setUsers(updatedUsers);
          })
        })
        .catch(e => console.log('WS Connection failed: ', e));
        */
    }
  }, [connection]);

  return (
    <div>
      <Metric
        title="Llamadas"
      />
      <Calls />
    </div>
  )
}

export default Home