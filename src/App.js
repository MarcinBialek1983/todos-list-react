import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";


function App() {

  const [hideDoneTasks, setHideDoneTasks] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejść na Reacta", done: false },
    { id: 2, content: "Obrać ziemniaki", done: true },
  ])

  const toggleHideDone = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Moja lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            removeTask={removeTask} />}
        extraHeaderButtons={
          <Buttons
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            toggleHideDone={toggleHideDone} />}
      />
    </Container>
  );
}

export default App;
