interface JSONTree {
    name: string;
    age: number;
    city: string;
}

interface TreeProps {
    title: string;
    value: JSONTree;
    onChange: boolean;
    editable: boolean;
}

const Tree: React.FC<TreeProps> = ({ title, value, onChange, editable }) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                <li>Nombre: {value.name}</li>
                <li>Edad: {value.age}</li>
                <li>Ciudad: {value.city}</li>
                <li>Editable es: {editable ? 'editable' : 'no editable'}</li>
                <li>onChange es: {onChange ? 'onChange' : 'no onChange'}</li>
            </ul>
        </div>
    );
};

export default Tree;