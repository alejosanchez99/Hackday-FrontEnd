import { useEffect, useState } from 'react'
import { initWSConnection, getData } from '../../../services/utilsWS'
import Metric from '../../Metric';

const Sales = () => {
  const [connection, setConnection] = useState(null);
  const [sales, setSales] = useState([]);

  const [green, setGreen] = useState(false);

  useEffect(() => {
    setConnection(initWSConnection('metric'))
  }, [])

  useEffect(() => {
    getData(connection, 'sales', setSales)
  }, [connection])

  useEffect(() => {
    console.log("sales", sales);
    setGreen(true);
  }, [sales]);

  useEffect(() => {
    if (green) {
      setTimeout(() => {
        setGreen(false);
      }, 500);
    }
  }, [green]);

  return (
    <Metric
      title={sales?.metric?.title}
      count={sales?.metric?.count}
      max={sales?.metric?.max}
      min={sales?.metric?.min}
      sum={sales?.metric?.sum}
      className={green ? 'green' : ''} />
  )
}

export default Sales
