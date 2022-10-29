import { useEffect, useState } from 'react'
import { initWSConnection, getData } from '../../../services/utilsWS'
import Metric from '../../Metric';

const Events = () => {
  const [connection, setConnection] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setConnection(initWSConnection('metric'))
  }, [])

  useEffect(() => {
    getData(connection, 'aEvents', setEvents)
  }, [connection])

  useEffect(() => {
    console.log("events", events);
  }, [events]);

  return (
    <Metric
      title={events?.metric?.title}
      count={events?.metric?.count}
      sum={events?.metric?.sum} />
  )
}

export default Events
