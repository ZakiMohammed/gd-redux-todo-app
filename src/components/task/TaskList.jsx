import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskItem from './TaskItem'
import TaskServices from '../../services/TaskServices'
import { getAll, setLoading } from '../../slices/TaskSlice'

const TaskList = () => {

    const tasks = useSelector(state => state.task.tasks)
    const dispatch = useDispatch()

    useEffect(() => {
        const getTasks = async () => {
            try {
                dispatch(setLoading(true))

                const data = await TaskServices.getAll()

                dispatch(getAll(data))

            } catch (error) {
                console.log(`Error Occurred: ${error.message}`)
            } finally {
                dispatch(setLoading(false))
            }
        }

        if (!tasks) {
            getTasks();
        }

    }, [dispatch, tasks])

    return (
        <div className='card-holder'>
            {tasks && tasks.map(task => (
                <TaskItem key={task._id} task={task} />
            ))}
        </div>
    )
}

export default TaskList
