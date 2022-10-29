import { useEffect, useState } from 'react'
import { initWSConnection, getData } from '../../../services/utilsWS'
import Metric from '../../Metric';

const Schedules = () => {
  const [connection, setConnection] = useState(null);
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    setConnection(initWSConnection('user'))
  }, [])

  useEffect(() => {
    getData(connection, 'schedules', setSchedules)
  }, [connection]) 

  useEffect(() => {
    console.log("schedules", schedules);
  }, [schedules]);

  return (
    <div>
      <Metric {...schedules} />
    </div>
  )
}

export default Schedules
