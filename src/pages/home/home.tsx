import { Link } from 'react-router-dom'
import { Paths } from '../../shared/lib/const.ts'

export const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to={Paths.STEP_ONE}>Начать</Link>
    </div>
  )
}
