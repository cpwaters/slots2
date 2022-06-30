import Spinner from './spinner';
import Error from './error';
import { useUser } from '../../lib/users';

const Avatar = ({ id }) => {
    const { user, isLoading, isError} = useUser()
    if (isLoading) return <Spinner />
    if (isError) return <Error />
    console.log(user);
    return <img style={{ maxWidth: "50px", borderRadius: "60%" }}src={user.avatar} alt={user.name} />
}

export default Avatar;