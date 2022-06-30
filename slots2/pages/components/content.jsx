import Spinner from './spinner';
import Error from './error';
import { useUser } from '../../lib/users';

const Content = ({ id }) => {
    const { user, isLoading, isError} = useUser()
    if (isLoading) return <Spinner />
    if (isError) return <Error />
    return <p>Welcome back, {user.name}</p>
}

export default Content;