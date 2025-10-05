import { useNavigate } from 'react-router-dom'
import { Paths } from '../../shared/lib/const.ts'

export const PersonalDataPage = () => {
  const navigate = useNavigate()

  const handleMoreClick = () => {
    navigate(Paths.STEP_TWO)
  }

  return (
    <div>
      <h1>PersonalDataPage</h1>
      form
      <button onClick={handleMoreClick}>Продолжить</button>
    </div>
  )
}
