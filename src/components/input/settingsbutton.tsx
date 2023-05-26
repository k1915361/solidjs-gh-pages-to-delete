import { Button } from "../Button";
import '../../ui/helper/helper.css';
import { toggle } from "../../utility/helper";

export default function SettingsButton({ app }) {
    
    return <Button
        class=' floatright'
        onClick={e => {
            let a = app().style;
            let grid = a.getPropertyValue('grid-template-columns');
            a.setProperty('grid-template-columns'
                , toggle(grid
                    , `var(--gridTemplateDesktopDefault) 
                    | var(--gridWithoutSettingsColumn)`));
        }}
    >Settings</Button>
}