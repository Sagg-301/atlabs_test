import {Credentials} from '../../../models/credentials'
import {User} from '../../../models/user'
import {UserToken} from '../../../models/userToken'

export class SyncTokenService {

    authenticate(credentials: Credentials): User {
        let user = new User(credentials.username)
        return user
    }

    issueToken(user: User): UserToken {
        let cur_date = new Date()
        let token = new UserToken(`${user.userId}_${cur_date}`)

        return token
    }

    requestToken(credentials: Credentials):UserToken {
        let user = this.authenticate(credentials)
        let token = this.issueToken(user)
        return token
    }
}