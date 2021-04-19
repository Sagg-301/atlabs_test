import {Credentials} from '../../../models/credentials'
import {UserToken} from '../../../models/userToken'
import { IssueTokenCommand } from '../../commands/issueTokenCommand'
import { ValidateCredentialsCommand } from '../../commands/validateCredentailsCommand'

export class SimpleAsyncTokenService {


    requestToken(credentials: Credentials):Promise<UserToken> {
        return new Promise( (resolve, reject) => {

            let credentials_command = new ValidateCredentialsCommand(credentials)
            credentials_command.execute().then(user => {
                let token_command = new IssueTokenCommand(user)
                return token_command.execute()
            }).then(token=>{
                resolve(token);
            }).catch(err=>{
                reject(err)
            })

        })
    }
}