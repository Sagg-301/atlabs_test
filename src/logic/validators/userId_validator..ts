import { Validator } from './validator'
import {ValidationError} from '../../common/Errors/validationError'

export class UserIdValidator extends Validator{
    validate():any{
        if ( this.data.userId[0] === 'A'){
            throw new ValidationError("Invalid userId");
        }

        return true;
    }
}