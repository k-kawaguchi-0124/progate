import { JSX } from "react";

export function Hobbies(): JSX.Element {
    const hobbies = ["programming", "reading", "cooking"];
    return (
        <ul>
            {hobbies.map((hobby) => (
                <li key={hobby}>{hobby}</li>
            ))}
        </ul>
    );
}