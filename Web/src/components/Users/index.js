import { useEffect, useState } from 'react'
import { initWSConnection, getData } from '../../services/utilsWS'
import './styles.css'

const Users = () => {
  const [connection, setConnection] = useState(null);
  const [users, setUsers] = useState([]);

  const [green, setGreen] = useState(false);  

  useEffect(() => {
    setConnection(initWSConnection('user'))
  }, [])

  useEffect(() => {
    getData(connection, 'users', setUsers)
  }, [connection])

  useEffect(() => {
    setGreen(true);
  }, [users]);

  useEffect(() => {
    if (green) {
      setTimeout(() => {
        setGreen(false);
      }, 500);
    } 
  }, [green]);

  return (
    <div className='users-container'>
      <ul>
        {
          users.map((user) => {
            return <li className={green ? 'green' : ''}>{user.name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Users
