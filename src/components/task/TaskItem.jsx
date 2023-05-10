import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import Button from '../shared/Button'
import TaskServices from '../../services/TaskServices';
import Card from '../shared/Card';
import { useDispatch } from 'react-redux'
import { remove, setLoading } from '../../slices/TaskSlice'

const TaskItem = ({ task }) => {

    const dispatch = useDispatch()

    const handleRemoveTask = async () => {
        try {
            dispatch(setLoading(true))

            await TaskServices.remove(task._id)

            dispatch(remove(task))

        } catch (error) {
            window.alert(`Error Occurred: ${error.message}`)
        } finally {
            dispatch(setLoading(false))
        }
    }

    return (
        <Card>
            <Button className='btn-remove' handleClick={handleRemoveTask}>
                <FaTimes />
            </Button>
            <p>{task.title}</p>
        </Card>
    )
}

export default TaskItem

TaskItem.propTypes = {
    task: PropTypes.object,
}