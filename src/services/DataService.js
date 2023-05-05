// https://taskmanagersprint.azurewebsites.net/User/AddUser


const LoginService = async (loginUser, setIsLoading) => {
    const response = await fetch('https://taskmanagersprint.azurewebsites.net/User/Login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginUser)
        });
    if (!response.ok) {
        setIsLoading(false);
        alert("Invalid login. Please double check your username and password.");
        const message = `An error has occured ${response.status}`;
        throw new Error(message);
    }
    setIsLoading(false);
    const data = await response.json();
    return data;
}

const GetUserInfo = async (username) => {
    const response = await fetch(`https://taskmanagersprint.azurewebsites.net/User/userByUsername/${username}`)
    const data = await response.json();
    return data;
}

const CreateUserAccount = async (createdUser) => {
    const response = await fetch('https://taskmanagersprint.azurewebsites.net/User/AddUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdUser)
    });
    if (!response.ok) {
        const message = `An Error has Occurred ${response.status}`;
        throw new Error(message);
    }
    let data = await response.text();
    return data;
}


export { LoginService, GetUserInfo, CreateUserAccount }