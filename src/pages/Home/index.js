/* eslint-disable react-hooks/exhaustive-deps */
import React , {useEffect} from 'react'
import { ListPostByUser } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getPostUserAsync } from '../../utils/globalFunc';
const Home = () => {

    const items = useSelector((state) => state.post.posts)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getPostUserAsync())
    }, [])
    
        console.log("items",items)
    return (
        <div>
             {items?.users?.map((user, i) => (
                 <ListPostByUser user={user} key={i} items={items} />
                    ))}
        </div>
    )
}

export default Home
