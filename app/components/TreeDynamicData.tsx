import React from "react";
import ListItem from "./ListItem";

export default function TreeDynamicData(props) {
  console.log('props inside tree dynamic data', props);
  const { dynamicData, level = 0 } = props;
  console.log("%cinside tree", "color: red", dynamicData, "level", level);
  if (!dynamicData || !dynamicData.length) return null;

  return (
    <div className="level-wrapper">
      {dynamicData.map((item) => (
        <div id={item.title} className="item" key={`${item.title}-${level}`}>
          <ListItem item={item} level={level} />
          <TreeDynamicData dynamicData={item.children} level={level + 1} />
        </div>
      ))}
    </div>
  );
}
