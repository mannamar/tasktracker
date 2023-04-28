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

async function updateTask(task) {
    const response = await fetch('https://taskmanagersprint.azurewebsites.net/Task/UpdateTaskItem', {
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

async function getTaskItemById(taskId) {
    let res = await fetch(`https://taskmanagersprint.azurewebsites.net/Task/GetBlogItemById/${taskId}`);
    let data = res.json();
    return data;
}

export { getAllTasks, addTask, updateTask, getTaskItemById };