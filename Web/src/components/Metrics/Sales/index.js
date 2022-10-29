import { useEffect, useState } from 'react'
import { initWSConnection, getData } from '../../../services/utilsWS'
import Metric from '../../Metric';

const Sales = () => {
  const [connection, setConnection] = useState(null);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    setConnection(initWSConnection('user'))
  }, [])

  useEffect(() => {
    getData(connection, 'sales', setSales)
  }, [connection]) 

  useEffect(() => {
    console.log("sales", sales);
  }, [sales]);

  return (
    <div>
      <Metric {...sales} />
    </div>
  )
}

export default Sales
