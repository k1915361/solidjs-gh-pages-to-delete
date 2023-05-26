import { createSignal } from "solid-js";
import Line from "../ui/line";

export default function SelectOptions({ name, options, onChange }) {
    const [selectedOption, setSelectedOption] = createSignal(options[0].value || options[0]);

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }

    return <>
        <legend>{name}</legend>
        <Line/>
        <select class='input'
            onChange={onChange || handleChange}                    
        >
            {options.map((o) => (
                <option
                    name={o.name || o}
                    value={o.value || o}
                    checked={selectedOption() === (o.value || o)}
                >
                    {o.label || o}
                    <Line/>
                </option>
            ))}
        </select>
    </>
}