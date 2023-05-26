import { numbersfrom } from "../../../../utility/helper";
import RangeSlider from "../../../rangeSlider";
import { createSignal } from "solid-js";
import Line from "../helper/line";

export default function RadioGroup({ name, options }) {
    const [selectedOption, setSelectedOption] = createSignal(options[0].value || options[0]);

    const handleChange = (e) => { 
        setSelectedOption(e.target.value);
    }

    return <>
        <legend>{name}</legend>
        <Line/>
        {options.map((o) => (            
            <label>
                <input
                    type="radio"
                    name={o.name || o}
                    value={o.value || o}
                    checked={selectedOption() === (o.value || o)}
                    onChange={handleChange}
                />
                {o.label || o}
                <Line/>
            </label>
        ))}
    </>
}