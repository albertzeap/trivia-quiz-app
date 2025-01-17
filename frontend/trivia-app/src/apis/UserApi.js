const URI = "https://trivia-app-backend.vercel.app/";

export const UserApi = {

    createUser: async (firstName, lastName, username, email, password) => {

        try {
            const response = await fetch(URI + "/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    email: email,
                    password: password
                })
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);

            } else {
                console.error("Error: ", response.status);
            }

        } catch (error) {
            console.error("Error: ", error);
        }

    },

    getUserByCredentials: async (username, password, setUser, setAuth) => {
        try {
            const response = await fetch(URI + "/login", {
                // Specify the type of HTTP request being made -> POST
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // Send the username and password as a JSON object
                body: JSON.stringify({ username: username, password: password })
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Data: ", data);
                setUser(data);
                setAuth({ show: true, auth: true });
            } else {
                console.error("Error:", response.status);
                setAuth({ show: true, auth: false });
            }

        } catch (error) {
            console.error("Error: ", error);
        }
    }
}