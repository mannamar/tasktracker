async function getAllTasks() {
    let res = await fetch('https://taskmanagersprint.azurewebsites.net/Task/GetAllBlogItems');
    let data = await res.json();
    console.log(data);
    return data;
}

async function addTask(task) {
    const response = await fetch('https://taskmanagersprint.azurewebsites.net/Task/AddTask', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });

    if(!response.ok) {
        const message = `An error has occured ${response.status}`;
        throw new Error(message);
    }

    let data = await response.json();
    console.log(data);
    return data;
}

async function updateTask(blogItem) {
    const response = await fetch('https://taskmanagersprint.azurewebsites.net/Task/UpdateTaskitem', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogItem)
    });

    if(!response.ok) {
        const message = `An error has occured ${response.status}`;
        throw new Error(message);
    }

    let data = await response.json();
    console.log(data);
    return data;
}

export { getAllTasks, addTask, updateTask };