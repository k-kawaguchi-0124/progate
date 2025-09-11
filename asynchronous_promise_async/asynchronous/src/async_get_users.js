const port = process.env.PORT || 8000;

const fetchUser = (userId) => {
    return fetch(`http://localhost:${port}/users/${userId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("User not found");
            }
            return response.json();
        })
}

// const main = async() => {
//     try {
//         for (let i = 1; i <= 6; i++) {
//             await fetchUser(i)
//                 .then((user) => {
//                     console.log(user);
//                     return fetchUser(i + 1);
//                 })
//         }
//     } catch (err) {
//         console.error(err.message);
//     }
// }

const main = async() => {
    try {
        for (let i = 1; i <= 6; i++) {
            const user = await fetchUser(i);
            console.log(user);
        }
    } catch (err) {
        console.error(err.message);
    }
}

main();