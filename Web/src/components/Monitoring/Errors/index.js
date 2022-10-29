import { useEffect, useState } from 'react'
import { initWSConnection, getData } from '../../../services/utilsWS'
import Metric from '../../Metric';

const Errors = () => {
  const [connection, setConnection] = useState(null);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setConnection(initWSConnection('user'))
  }, [])

  useEffect(() => {
    getData(connection, 'errors', setErrors)
  }, [connection])

  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);

  return (
    <Metric {...errors} />
  )
}

export default Errors