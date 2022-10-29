import { useEffect, useState } from 'react'
import { initWSConnection, getData } from '../../../services/utilsWS'
import Metric from '../../Metric';

const Acw = () => {
  const [connection, setConnection] = useState(null);
  const [acw, setAcw] = useState([]);

  useEffect(() => {
    setConnection(initWSConnection('user'))
  }, [])

  useEffect(() => {
    getData(connection, 'Acw', setAcw)
  }, [connection]) 

  useEffect(() => {
    console.log("Acw", acw);
  }, [acw]);

  return (
    <div>
      <Metric {...acw} />
    </div>
  )
}

export default Acw
