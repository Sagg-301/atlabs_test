import { User } from '../../models/user';
import { CredentialsValidator } from '../validators/credentials_validator';
import { Command } from './command'

/**
 * Command that validates the credentials and returns an User instance if successfull
 */
export class ValidateCredentialsCommand extends Command{

    execute():Promise<any>{
            return new Promise((resolve, reject)=>{
                setTimeout(() => {
                    try {
                        let validator = new CredentialsValidator(this.payload);
                        validator.validate()

                        let user = new User(this.payload.username);
                        
                        resolve(user);
                    } catch (error) {
                        reject(error)
                    }
                }, Math.floor(Math.random() * 5001));
            })
    }
}