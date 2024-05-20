import { useState } from 'react';
import { Container, VStack, HStack, Input, Button, Checkbox, Text, Box, IconButton } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Text fontSize="3xl" mb={6}>Todo App</Text>
        <HStack w="100%">
          <Input
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button colorScheme="blue" onClick={addTask}>
            Add Task
          </Button>
        </HStack>
        <VStack w="100%" spacing={2}>
          {tasks.map((task, index) => (
            <HStack key={index} w="100%" p={2} bg={task.completed ? 'green.100' : 'gray.100'} borderRadius="md">
              <Checkbox isChecked={task.completed} onChange={() => toggleTaskCompletion(index)}>
                <Text as={task.completed ? 'del' : undefined}>{task.text}</Text>
              </Checkbox>
              <Spacer />
              <IconButton icon={<FaTrash />} colorScheme="red" onClick={() => removeTask(index)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;