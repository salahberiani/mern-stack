import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Text, Heading } from '@chakra-ui/react';

function App() {
  const [state, setState] = useState();
  useEffect(() => {
    axios
      .get('/api/hi')
      .then((res) => {
        console.log(res);
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box>
      <Heading>mern stack</Heading>
      <Text>{state?.hello}</Text>
    </Box>
  );
}

export default App;
