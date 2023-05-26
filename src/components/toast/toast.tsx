import { handleToast } from './toast-helper'
import './toast.css'

export default function Toast({ message='...' }) {

    return <>
        <div id="snackbar">{message}</div>
    </>
}

function ToastButton() {
    return <button class='hidden' onclick={handleToast}>Show Toast</button>
}