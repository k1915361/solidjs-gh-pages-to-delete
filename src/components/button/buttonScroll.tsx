import { bottomOrTop } from "~/utility/helper" 
import { Button } from "./button"

export default function ScrollButton(props) {
  const { text, style } = props
    let ref = props.ref()
    return <Button
        onClick={() =>
            ref.scrollTo({
                top: bottomOrTop(ref),
                behavior: 'smooth'
            })}
        style={{
            position: 'sticky',
            bottom: '0px',
            float: 'right',
            width: 'fit-content',
            ...style
        }}
    >{text}</Button>
}