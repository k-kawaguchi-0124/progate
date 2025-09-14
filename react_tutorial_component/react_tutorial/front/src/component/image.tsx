import { JSX } from "react";

export function Image(props: { src: string; alt: string}): JSX.Element {
    return <img src={props.src} alt={props.alt} />;
}
