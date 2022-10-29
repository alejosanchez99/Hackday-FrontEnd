import { useEffect, useState } from 'react'
import { initWSConnection, getData } from '../../../services/utilsWS'
import Metric from '../../Metric';

const Calls = () => {
  const [connection, setConnection] = useState(null);
  const [calls, setCalls] = useState({});

  const [green, setGreen] = useState(false);

  useEffect(() => {
    setConnection(initWSConnection('metric'))
  }, [])

  useEffect(() => {
    getData(connection, 'calls', setCalls)
  }, [connection])

  useEffect(() => {
    console.log("calls", calls);
    setGreen(true);
  }, [calls]);

  useEffect(() => {
    if (green) {
      setTimeout(() => {
        setGreen(false);
      }, 500);
    } 
  }, [green]);

  return (
    <Metric {...calls.metric} className={green ? 'green' : ''} />
  )
}

export default Calls
