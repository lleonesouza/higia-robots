// Usecases
import makeUser from './users'
import { User} from '../mongodb/index'


const user = makeUser(User)



export default {user}
export {user}