import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const board = [...Array(9)].map(() => [...Array(9)].map(() => -1));
  const normalBoard = board.map((row) => row.map(() => 0));
  const [userInput, setUserInput] = useState(normalBoard);
  const [bombMap, setBombMap] = useState(normalBoard);
  const clickL = (x: number, y: number) => {
    console.log(x, y);
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((val, x) => (
            <div
              className={styles.cell}
              key={`${y}-${x}`}
              style={{ backgroundPosition: (val - 1) * -30 }}
              onClick={() => clickL(x, y)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
