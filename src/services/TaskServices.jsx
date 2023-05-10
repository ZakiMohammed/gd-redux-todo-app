import axios from 'axios'

const API_URL = 'http://localhost:3000'

const taskAxios = axios.create({
    baseURL: `${API_URL}/api/todos/`
})

const getAll = async () => {
    const response = await taskAxios.get('/')
    return response.data
};

const add = async (task) => {
    const response = await taskAxios.post('/', task, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
};

const remove = async (id) => {
    const response = await taskAxios.delete(`${id}`)
    return response.data
};

const TaskServices = {
    getAll,
    add,
    remove,
}

export default TaskServices