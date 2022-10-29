import { useEffect, useState } from 'react'
import { initWSConnection, getData } from '../../../services/utilsWS'
import Metric from '../../Metric';

const Acw = () => {
  const [connection, setConnection] = useState(null);
  const [acw, setAcw] = useState([]);

  const [green, setGreen] = useState(false);

  useEffect(() => {
    setConnection(initWSConnection('metric'))
  }, [])

  useEffect(() => {
    getData(connection, 'acw', setAcw)
  }, [connection])

  useEffect(() => {
    console.log("Acw", acw);
    setGreen(true);
  }, [acw]);

  useEffect(() => {
    if (green) {
      setTimeout(() => {
        setGreen(false);
      }, 500);
    } 
  }, [green]);

  return (
    <Metric {...acw} className={green ? 'green' : ''} />
  )
}

export default Acw
