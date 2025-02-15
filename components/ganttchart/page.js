import React from 'react';
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

export default function GanttChart({tasks}) {
  // todo: progress bar mindenhol 100%
  // todo: arr meg dep date igy minden foglalas jelezve lesz
  const groupedTasks = GroupTasksByNumber(tasks);

  const renderTasks = () => {
    return Object.keys(groupedTasks).map(number => (
      <div key={number} style={{ display: 'flex', flexDirection: 'row' }}>
        {groupedTasks[number].map(task => (
          <div key={task.id} style={{ margin: '0 10px' }}>
            {/* Custom rendering of each task */}
            <h3>{task.name}</h3>
            <p>Start: {task.start}</p>
            <p>End: {task.end}</p>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <Gantt
      tasks={tasks}
      viewMode={ViewMode.Day}
      viewDate={new Date()}
      todayColor="#daa06d"
      barProgressColor='#daa06d'
      barProgressSelectedColor='#C35355'
    />
  )
}

function GroupTasksByNumber(tasks) {
  return tasks.reduce((acc, task) => {
    if (!acc[task.number]) {
      acc[task.number] = [];
    }
    acc[task.number].push(task);
    return acc;
  }, {});
}