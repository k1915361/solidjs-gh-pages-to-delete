import './sliderNumberInput.css'

export default function SliderNumberInput({ class: classs, min, value, clss, onInput, max }) {
    let number;
    let slider;
    return <form class='inline slider-number-input-container'>
        <input
            ref={slider}
            class={classs || ' slider inline'}
            type="range"
            value={value}
            min={min}
            max={max}
            onInput={onInput}
            style={`
                --min: ${min || 0};
                --max: ${max || 100};
                --val: ${50};
            `}
            onMouseMove={e => {
                e.target.style.setProperty('--val', e.target.value)
                number.value = e.target.value
            }
            }
        />
        <input
            type='number'
            class='inline number-input'
            style={``}
            ref={number}
            min={min}
            max={max}
            value={value}
            onInput={e => { 
                onInput(e)
                slider.value = e.target.value
                slider.style.setProperty('--val', e.target.value)
            }}
            onChange={e => { onInput(e)
            }}
        />
    </form>
} 
