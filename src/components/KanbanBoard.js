import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  TextField,
} from "@mui/material";

const initialTasks = {
  todo: [
    { id: "1", content: "Design UI" },
    { id: "2", content: "Add Charts" },
  ],
  inProgress: [],
  done: [],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (!newTask) return;
    const newId = Date.now().toString();
    setTasks({
      ...tasks,
      todo: [...tasks.todo, { id: newId, content: newTask }],
    });
    setNewTask("");
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceTasks = [...tasks[source.droppableId]];
    const [movedItem] = sourceTasks.splice(source.index, 1);
    const destTasks = [...tasks[destination.droppableId]];
    destTasks.splice(destination.index, 0, movedItem);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceTasks,
      [destination.droppableId]: destTasks,
    });
  };

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAdd}
        >
          Add Task
        </Button>
      </Box>

      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={2}>
          {Object.entries(tasks).map(([status, items]) => (
            <Grid item xs={12} md={4} key={status}>
              <Paper sx={{ p: 2, background: "#fdfdfd" }}>
                <Typography
                  variant="h6"
                  sx={{ textTransform: "capitalize", mb: 1 }}
                >
                  {status}
                </Typography>
                <Droppable droppableId={status}>
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      sx={{
                        minHeight: 150,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                      }}
                    >
                      {items.map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <Box
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              sx={{
                                p: 1.5,
                                backgroundColor: "#fff",
                                borderRadius: 1,
                                boxShadow: 1,
                                cursor: "grab",
                              }}
                            >
                              {task.content}
                            </Box>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Box>
                  )}
                </Droppable>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </Box>
  );
};

export default KanbanBoard;
