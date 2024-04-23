import '../assets/css/bootstrap.min.css'
import '../assets/css/custom.css'
import '../assets/css/dashboard.css'
import AllFoodList from '../components/allFood/allFood'
import Header from '../components/common/Header'
export default function AllFood() {
  return (
    <>
      <Header />
      <AllFoodList />
    </>
  )
}
