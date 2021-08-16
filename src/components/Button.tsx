/* type ButtonProps = {
    text?: string;
}

export function Button(props: ButtonProps) {
    return (
        <button>{props.text || "ClickMe"}</button>
    )
}

// O caracter de interrogação, significa que o text é opcional */

import { ButtonHTMLAttributes } from 'react'
import "../styles/button.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
    return(
        <button className="button" {...props} />
    )
}

/* eu preciso/quero passar para o botão qualquer tipo de atributo que eu passaria para o HTML
O próprio React exporta para uso uma tipagem do TypeScript chamada ButtonHTMLAttributes (clicando com o botão direito nele, dá para ver todos esses atributos)
Ele permite que todos os atributos possam ser usados
Quando chamar a funcão <Button /> e apertar um CTRL + Espaço, ele vai passar todas as propriedades disponíveis para uso no botão

*/