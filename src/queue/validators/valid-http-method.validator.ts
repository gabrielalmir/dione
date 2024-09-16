import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'ValidHttpMethod', async: false })
export class ValidHttpMethod implements ValidatorConstraintInterface {
    validate(method: string, args: ValidationArguments) {
        const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];
        return validMethods.includes(method?.toUpperCase());
    }

    defaultMessage(args: ValidationArguments) {
        return 'Invalid HTTP method';
    }
}
