import React from "react";
import { FixedSizeList as List } from "react-window";
const App = () => {
  const list = Array.from({ length: 1000 }, (_, idx) => idx + 1);
  const Row = ({ index, style }) => <div style={style}>{list[index]}</div>;
  console.log(window?.innerHeight);
  return (
    <div>
      <List
        className="List"
        height={window?.innerHeight}
        width={window?.innerWidth}
        itemCount={1000}
        itemSize={50}
      >
        {Row}
      </List>
    </div>
  );
};

export default App;
