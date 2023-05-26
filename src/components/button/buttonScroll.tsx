import { bottomOrTop } from "~/utility/helper" 
import { Button } from "./Button"

export default function ScrollButton(props) {
  const { text, yPos, onclick, style } = props
    let ref = props.mainRef
    
    return <Button
        onClick={() =>
            props.mainRef.scrollTo({
                top: bottomOrTop(props.mainRef),
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