type ButtonProps = {
    text?: string;
}

export function Button(props: ButtonProps) {
    return (
        <button>{props.text || "ClickMe"}</button>
    )
}

// O caracter de interrogação, significa que o text é opcional