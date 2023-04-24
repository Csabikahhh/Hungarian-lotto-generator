import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const LotteryGenerator5 = () => {
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const numbersArray = [];
    while (numbersArray.length < 5) {
      const number = Math.floor(Math.random() * 90) + 1;
      if (!numbersArray.includes(number)) {
        numbersArray.push(number);
      }
    }
    setNumbers(numbersArray.sort((a, b) => a - b));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Ötös Lottó Generátor</h1>
      <Form className='text-center'>
        <Form.Group>
          <Form.Label>Generált számok:</Form.Label>
          <Form.Control type="text" value={numbers.join(', ')} readOnly />
        </Form.Group>
        <Button className='m-3 custom-color-five' variant="primary" onClick={generateNumbers}>
          Számok generálása
        </Button>
      </Form>
    </div>
  );
};

export default LotteryGenerator5;
