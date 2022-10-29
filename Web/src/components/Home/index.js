import Calls from '../Metrics/Calls';
import Acw from '../Metrics/Acw';
import Sales from '../Metrics/Sales';
import Schedules from '../Metrics/Schedules';

const Home = () => {
  return (
    <div>
      <Calls />
      <Acw />
      <Sales />
      <Schedules />
    </div>
  )
}

export default Home