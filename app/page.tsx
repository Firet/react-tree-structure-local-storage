/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// import useLocalStorage from "./hooks/useLocalStorage";
import { useState } from "react";
import TreeDynamicData from "./components/TreeDynamicData";
// import FormCustom from "./components/FormCustom";
// import { findNodeCustom } from "./helpers/findNodeCustom";
import { findNodeOriginal } from "./helpers/findNodeOriginal";
import "./styles.css";
import Form from "./components/FormCustom";
// import "@nosferatu500/react-sortable-tree/style.css";

// interface IncomingData {
//   parent?: string;
//   title: string;
//   name: string
//   // otros campos que pueda tener incoming
// }

// interface CustomData extends IncomingData {
//   children?: CustomData[];
// }

export default function Home() {
  // const [value, setValue] = useLocalStorage("favoriteNumber", "");

  // const [favoriteNumber, setFavoriteNumber] = useState(value);

  // const saveToLocalStorage = (e: any) => {
  //   e.preventDefault();
  //   setValue(favoriteNumber);
  // };

  // const [newData, setNewData] = useState<CustomData[]>([]);
  const [newData, setNewData] = useState([]);
  // const [customData, setCustomData] = React.useState([]);
  console.log("top level app", newData);

  // function handleSubmitOriginal(event: any, incoming: any) {
  //   event.preventDefault();
  //   let { parent } = incoming;
  //   console.log("incoming", incoming);

  //   if (newData.length === 0) {
  //     setNewData((oldData) => [...oldData, incoming]);
  //     console.log("%cFIRST COMPONENT", "color: orange", incoming);
  //   } else {
  //     console.log("adding a child");
  //     let currentData = newData[0];
  //     if (!parent) {
  //       parent = currentData.name;
  //       incoming.parent = parent;
  //     }
  //     console.log("currentData", currentData, "parent", currentData.name);
  //     // we need to loop throught the current tree to find the matching parent
  //     // once found, we need to push the new node to the array of children of that parent node
  //     const newChild = findNodeOriginal(parent, incoming, currentData);
  //     setNewData([newChild]);
  //   }
  // }

  function handleSubmitOriginal(event, incoming) {
    event.preventDefault();
    let { parent } = incoming;
    console.log("incoming", incoming);

    if (newData.length === 0) {
      setNewData((oldData) => [...oldData, incoming]);
      console.log("%cFIRST COMPONENT", "color: orange", incoming);
    } else {
      console.log("adding a child");
      let currentData = newData[0];
      if (!parent) {
        parent = currentData.title;
        incoming.parent = parent;
      }
      console.log("currentData", currentData, "parent", currentData.title);
      // we need to loop throught the current tree to find the matching parent
      // once found, we need to push the new node to the array of children of that parent node
      const newChild = findNodeOriginal(parent, incoming, currentData);
      setNewData([newChild]);
    }
  }


  return (
    <div>
      <Form handleSubmit={handleSubmitOriginal} />
      <section className="dynamic">
        <h2>Tree dynamic</h2>
        <TreeDynamicData dynamicData={newData} />
      </section>
    </div>
  );
}