import "./Dashboard.css"
import Button from "../Button/Button"

const Dashboard = () => {
  return (
    <>
      <div className="heading">Dashboard</div>
      <div className="button">
        <Button title="Create your notes"/>
        <Button title="View your notes"/>
      </div>
    </>
  )
}

export default Dashboard