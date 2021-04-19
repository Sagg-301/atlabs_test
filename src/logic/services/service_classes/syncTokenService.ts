import {Credentials} from '../../../models/credentials'
import {User} from '../../../models/user'
import {UserToken} from '../../../models/userToken'

/**
 * SyncTokenService implementation
 */
export class SyncTokenService {

    /**
     * 
     * @param credentials User Credentials
     * @returns User
     */
    authenticate(credentials: Credentials): User {
        let user = new User(credentials.username)
        return user
    }

    /**
     * Given a user issues a token with the format {userId}_{current date}
     * @param user User
     * @returns UserToken
     */
    issueToken(user: User): UserToken {
        let cur_date = new Date()
        let token = new UserToken(`${user.userId}_${cur_date}`)

        return token
    }

    /**
     * Method that validates credentials and issues UserToken
     * @param credentials User Credentials
     * @returns UserToken
     */
    requestToken(credentials: Credentials):UserToken {
        let user = this.authenticate(credentials)
        let token = this.issueToken(user)
        return token
    }
}