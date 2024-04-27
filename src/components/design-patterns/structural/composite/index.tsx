import React from "react";

// Define a type for TaskData
type TaskData = {
  id: number;
  title: string;
  subtasks?: TaskData[];
};

// Composite Component representing a Task
class Task extends React.Component<TaskData> {
  render() {
    const { title, subtasks } = this.props;

    return (
      <div style={{ marginLeft: "20px" }}>
        <div>{title}</div>
        {subtasks && (
          <div style={{ marginLeft: "20px" }}>
            {subtasks.map((subtask) => (
              <Task key={subtask.id} {...subtask} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

// Usage example of Task component
const Composite: React.FC = () => {
  const tasks: TaskData[] = [
    {
      id: 1,
      title: "Main Task 1",
      subtasks: [
        {
          id: 2,
          title: "Subtask 1 of Main Task 1",
        },
        {
          id: 3,
          title: "Subtask 2 of Main Task 1",
        },
      ],
    },
    {
      id: 4,
      title: "Main Task 2",
      subtasks: [
        {
          id: 5,
          title: "Subtask 1 of Main Task 2",
          subtasks: [
            {
              id: 6,
              title: "Subtask of Subtask 1",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default Composite;
