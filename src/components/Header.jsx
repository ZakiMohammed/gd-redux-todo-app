import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <h1>Redux Todo Application</h1>
            <h5>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
            </h5>
        </>
    )
}

export default Header
