import { useState } from 'react';
import Button from './Button';

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <Button className="btn-toggle" onClick={() => setIsOpen(open => !open)}>
        {isOpen ? '–' : '+'}
      </Button>
      {isOpen && children}
    </div>
  );
}

export default Box;
