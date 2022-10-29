import { useEffect, useState } from 'react'
import { initWSConnection, getData } from '../../../services/utilsWS'
import Metric from '../../Metric';

const Schedules = () => {
  const [connection, setConnection] = useState(null);
  const [schedules, setSchedules] = useState([]);

  const [green, setGreen] = useState(false);

  useEffect(() => {
    setConnection(initWSConnection('metric'))
  }, [])

  useEffect(() => {
    getData(connection, 'schedules', setSchedules)
  }, [connection])

  useEffect(() => {
    console.log("schedules", schedules);
    setGreen(true);
  }, [schedules]);

  useEffect(() => {
    if (green) {
      setTimeout(() => {
        setGreen(false);
      }, 500);
    } 
  }, [green]);

  return (
    <Metric {...schedules} className={green ? 'green' : ''} />
  )
}

export default Schedules
