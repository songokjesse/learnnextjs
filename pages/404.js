import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)

    }, [])
    return ( 
        <div>

            <h1>404 Oooops ........</h1>
            <p>Page your are looking for is not found</p>
        </div>
     );
}
 
export default NotFound;