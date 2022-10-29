import { useState } from 'react'
import Calls from '../Metrics/Calls';
import Acw from '../Metrics/Acw';
import Sales from '../Metrics/Sales';
import Schedules from '../Metrics/Schedules';
import './styles.css'
import Users from '../Users';

import Events from '../Monitoring/Events';
import Errors from '../Monitoring/Errors';


const Home = () => {
  const [isViewGeneralActive, setViewGeneralActive] = useState(true)

  return (
    <div className='container-home'>
      <div className='home'>
        <ul class="nav nav-tabs">
          <li class="nav-item" onClick={() => setViewGeneralActive(true)}>
            <a class={`nav-link ${isViewGeneralActive ? 'active' : ''}`} aria-current="page">
              General
            </a>
          </li>
          <li class="nav-item" onClick={() => setViewGeneralActive(false)}>
            <a class={`nav-link ${!isViewGeneralActive ? 'active' : ''}`}>Monitoreo</a>
          </li>
        </ul>

        <div className={`menu-item ${isViewGeneralActive ? 'show' : ''}`}>
          <div className='metrics'>
            <Calls />
            <Acw />
            <Sales />
            <Schedules />
          </div>
          <div className='separator'></div>
          <div className='users'>
            <Users />
          </div>
        </div>

        <div className={`menu-item ${!isViewGeneralActive ? 'show' : ''}`}>
          <div className='metrics'>
            <Events />
            <Errors />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home