import React , {useEffect} from 'react'
import { ListPostByUser } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getPostUserAsync } from '../../redux/postSlice';
const Home = () => {

    const items = useSelector((state) => state.post.posts)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getPostUserAsync())
    }, [])
    
        console.log("items",items)
    return (
        <div>
             {items?.users?.map((user) => (
                <ListPostByUser user={user} items={items} />
                    ))}
        </div>
    )
}

export default Home
