import { JSX } from "react";

export function Title(props: { text: string}): JSX.Element {
    return <h1>{`Hello ${props.text}!`}</h1>;
}