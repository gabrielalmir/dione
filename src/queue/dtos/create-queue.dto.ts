import { Transform } from "class-transformer";
import { IsString, IsUrl, Validate } from "class-validator";
import { ValidHttpMethod } from "../validators/valid-http-method.validator";

export class CreateQueueDto {
    @IsUrl({}, { message: 'Invalid endpoint URL' })
    readonly endpoint: string;

    @Validate(ValidHttpMethod)
    @IsString()
    @Transform(({ value }) => value ?? 'GET')
    readonly method: string;

    readonly data: any;
    readonly headers: any;
}
