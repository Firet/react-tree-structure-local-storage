interface JSONTree {
    name: string;
    age: number;
    city: string;
}

interface TreeProps {
    title: string;
    value: JSONTree;
    onChange: () => void;
    editable: boolean;
}

const Tree: React.FC<TreeProps> = ({ title, value, onChange, editable }) => {
      
      return (
        <div>
            <h2>{title}</h2>
            <h3>{editable ? 'Modo Edición' : 'Modo Lectura'}</h3>
            { editable && <button onClick={onChange}>Agregar Nodo</button> }
            <ul>
                <li>Nombre: {value.name}</li>
                <li>Edad: {value.age}</li>
                <li>Ciudad: {value.city}</li>
            </ul>
        </div>
    );
};

export default Tree;