import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsString, IsUrl, Validate } from "class-validator";
import { ValidHttpMethod } from "../validators/valid-http-method.validator";

export class CreateQueueDto {
    @IsUrl({}, { message: 'Invalid endpoint URL' })
    @ApiProperty({ description: 'Endpoint URL' })
    readonly endpoint: string;

    @Validate(ValidHttpMethod)
    @IsString()
    @Transform(({ value }) => value ?? 'GET')
    @ApiProperty({ description: 'HTTP Method [GET, POST, PUT, PATCH, DELETE]' })
    readonly method: string;

    @ApiProperty({ description: 'HTTP body (if required)', required: false })
    readonly data: any;

    @ApiProperty({ description: 'HTTP headers (if required)', required: false })
    readonly headers: any;
}
