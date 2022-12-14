import { useEffect, useState } from 'react'
import { initWSConnection, getData } from '../../../services/utilsWS'
import Metric from '../../Metric';

const Calls = () => {
  const [connection, setConnection] = useState(null);
  const [calls, setCalls] = useState([]);

  const [green, setGreen] = useState(false);

  useEffect(() => {
    setConnection(initWSConnection('metric'))
  }, [])

  useEffect(() => {
    getData(connection, 'aCalls', setCalls)
  }, [connection])

  useEffect(() => {
    console.log("Kev calls", calls);
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
    <Metric
      title={calls?.metric?.title}
      count={calls?.metric?.count}
      max={calls?.metric?.max}
      min={calls?.metric?.min}
      sum={calls?.metric?.sum}
      className={green ? 'green' : ''} />
  )
}

export default Calls
