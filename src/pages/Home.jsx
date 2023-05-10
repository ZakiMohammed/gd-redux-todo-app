import TaskList from '../components/task/TaskList'
import TaskForm from '../components/task/TaskForm'
import TaskEmpty from '../components/task/TaskEmpty'

const Home = () => {

    return (
        <>
            <TaskForm />
            <TaskList />
            <TaskEmpty />
        </>
    )
}

export default Home
