import { JSX } from "react";
import { Image } from "./image";
import { Hobbies } from "./hobbies";

export function Body(props: { person: { name: string, age: number } }): JSX.Element {
    return (
        <>
            <div>
                {`I'm ${props.person.name}, ${props.person.age} years old`}
            </div>
            <Image src="./sample.svg" alt="sample" />
            <Hobbies />
        </>
    );
}