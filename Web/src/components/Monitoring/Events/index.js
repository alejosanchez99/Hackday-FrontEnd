import { useEffect, useState } from 'react'
import { initWSConnection, getData } from '../../../services/utilsWS'
import Metric from '../../Metric';

const Events = () => {
  const [connection, setConnection] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setConnection(initWSConnection('user'))
  }, [])

  useEffect(() => {
    getData(connection, 'events', setEvents)
  }, [connection])

  useEffect(() => {
    console.log("events", events);
  }, [events]);

  return (
    <Metric {...events} />
  )
}

export default Events