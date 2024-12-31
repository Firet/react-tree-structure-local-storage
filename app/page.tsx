import styles from "./page.module.css";
import Tree from "./components/Tree";

// TODO: Add type
const jsonTree = {
  name: 'Nao',
  age: 34,
  city: 'Belgrado'
};

export default function Home() {
  return (
    <div className={styles.page}>
      <Tree title="Árbol Raíz" value={jsonTree} onChange={true} editable={false} />
    </div>
  );
}
