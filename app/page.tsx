'use client';
import styles from "./page.module.css";
import Tree from "./components/Tree";

// TODO: Add type
const jsonTree = {
  name: 'Nao',
  age: 34,
  city: 'Belgrado'
};

export default function Home() {

  const handleClick = () => console.log('handleClick');
  
  return (
    <div className={styles.page}>
      <Tree title="Árbol Raíz" value={jsonTree} onChange={handleClick} editable={true} />
    </div>
  );
}
