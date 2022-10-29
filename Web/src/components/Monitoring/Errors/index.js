import { useEffect, useState } from 'react'
import { initWSConnection, getData } from '../../../services/utilsWS'
import Metric from '../../Metric';

const Errors = () => {
  const [connection, setConnection] = useState(null);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setConnection(initWSConnection('metric'))
  }, [])

  useEffect(() => {
    getData(connection, 'aErrors', setErrors)
  }, [connection])

  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);

  return (
    <Metric
      title={errors?.metric?.title}
      count={errors?.metric?.count}
      sum={errors?.metric?.sum} />
  )
}

export default Errors
