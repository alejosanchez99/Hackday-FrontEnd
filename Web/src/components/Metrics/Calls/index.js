import { useEffect, useState } from 'react'
import { initWSConnection, getData } from '../../../services/utilsWS'
import Metric from '../../Metric';

const Calls = () => {
  const [connection, setConnection] = useState(null);
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    setConnection(initWSConnection('user'))
  }, [])

  useEffect(() => {
    const data = getData(connection, 'calls')
    console.log("DATa", data);
    setCalls(data);
  }, [connection]) 

  useEffect(() => {
    console.log("calls", calls);
  }, [calls]);

  return (
    <div>
      <Metric title="este es" {...calls} />
    </div>
  )
}

export default Calls
