'use client';
import styles from "./page.module.css";
import Tree from "./components/Tree";
import useLocalStorage from './hooks/useLocalStorage';


// TODO: Add type
const jsonTree = {
  name: 'Nao',
  age: 34,
  city: 'Belgrado'
};

export default function Home() {
  const [name, setName] = useLocalStorage<string>({ key: 'userName', initialValue: '' });
  const handleClick = () => console.log('handleClick');
  
  return (
    <div className={styles.page}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hola, {name}!</p>
      <Tree title="Árbol Raíz" value={jsonTree} onChange={handleClick} editable={true} />
    </div>
  );
}
