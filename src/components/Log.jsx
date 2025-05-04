export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li
          key={`${turn.square.rowIndex}${turn.square.colIndex}`}
          className={index === 0 ? "highlighted" : undefined}
        >
          {turn.player} selected: {turn.square.rowIndex},{turn.square.colIndex}
        </li>
      ))}
    </ol>
  );
}
