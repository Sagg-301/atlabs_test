import { UserToken } from '../../models/userToken';
import { Command } from './command'
import {UserIdValidator} from '../validators/userId_validator.'

export class IssueTokenCommand extends Command{

    execute():any{
        
            let validator = new UserIdValidator(this.payload);
            validator.validate()

            let cur_date = new Date();
            let token = new UserToken(`${this.payload.userId}_${cur_date}`);

            return token;
    }
}