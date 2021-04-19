import { Validator } from './validator'
import {ValidationError} from '../../common/Errors/validationError'

export class CredentialsValidator extends Validator{
    validate():any{
        if ( this.data.username.toUpperCase() !== this.data.password ){
            throw new ValidationError("Invalid Credentials");
        }

        return true;
    }
}