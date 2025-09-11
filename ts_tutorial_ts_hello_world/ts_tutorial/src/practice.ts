let greet: string;
greet = "Hello";
console.log(greet);

type dayOfWeek = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

const isWeekday = (dayOfWeek: dayOfWeek): boolean => {
    return dayOfWeek !== "Sun" && dayOfWeek !== "Sat"
}

console.log(isWeekday("Mon"));
console.log(isWeekday("Sun"));

type UserOptions = {
    name: string,
    age: number
};

const showUserOptions = (options: UserOptions) => {
    console.log(`User: name: ${options.name}, age: ${options.age}`)
};

showUserOptions({name: `Ken the Ninja`, age: 20});