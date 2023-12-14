import { toast } from "react-toastify"

export function toastify(text: string) {
    toast(text, {
        theme: "dark",
        position: 'bottom-left',
        progressStyle: {background: '#00875f'},
        autoClose: 1000,
      })
}