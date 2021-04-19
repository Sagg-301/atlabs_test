import {Credentials} from '../../../models/credentials'
import {UserToken} from '../../../models/userToken'
import { IssueTokenCommand } from '../../commands/issueTokenCommand'
import { ValidateCredentialsCommand } from '../../commands/validateCredentailsCommand'

export class SimpleAsyncTokenService {

    /**
     * Simple method that validates and generates UserToken
     * @param credentials Credentials to validate and generate UserToken
     * @returns Promise<UserToken>
     */
    requestToken(credentials: Credentials):Promise<UserToken> {
        return new Promise( (resolve, reject) => {
            
            //Validate the credentials, if successfull, return a Promise with the User instance
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