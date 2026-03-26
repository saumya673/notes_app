import "./Dashboard.css";
import { useState } from "react";

const Dashboard = () => {
  const [toDo, setToDo] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleClick = () => {
    if (toDo.trim() === "") return;

    setTasks([...tasks, toDo]);
    setToDo("");
  };
  return (
    <>
      <div className="heading">My To Do</div>
      <div className="button">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <input
            value={toDo}
            onChange={(e) => {
              setToDo(e.target.value);
            }}
            type="text"
            placeholder="Enter your notes"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* table */}
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
