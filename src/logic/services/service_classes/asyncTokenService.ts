import {Credentials} from '../../../models/credentials'
import {User} from '../../../models/user'
import {UserToken} from '../../../models/userToken'
const logger = require('../../../loaders/logger')

/**
 * AsyncTokenService implementation
 */
export class AsyncTokenService {

    /**
     * 
     * @param credentials Credentials of an User
     * @returns Promise<User>
     */
    authenticate(credentials: Credentials): Promise<User> {
        return new Promise((resolve, reject) =>{
            try {
                let user = new User(credentials.username)
                resolve(user)
            } catch (error) {
                reject(error)
            }
            
        })
    }

    /**
     * Given a user issues a token with the format {userId}_{current date}
     * @param user User
     * @returns Promise<UserToken>
     */
    issueToken(user: User): Promise<UserToken> {
        return new Promise( (resolve, reject) => {
            try {
                let cur_date = new Date()
                let token = new UserToken(`${user.userId}_${cur_date}`)

                resolve(token)
            } catch (error) {
                reject(error)
            }
        })
    }

    requestToken(credentials: Credentials):Promise<UserToken> {
        return new Promise( (resolve,reject) => {
            let token:UserToken = null

            this.authenticate(credentials).then(user =>{
                //Issues a token after the autheticate promise finishes
                return this.issueToken(user)
            }).then(ok=>{
                token = ok
                resolve(token)
            }).catch(error =>{
                logger.error(error.stack)
                reject(error)
            })
        })
    }
}