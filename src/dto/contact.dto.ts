import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator"

export class Contact {
    @IsString()
    @IsNotEmpty()
    name!: string

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email!: string

    @Matches(/(\d-\d-\d)|(\d)/)
    @IsString()
    @IsOptional()
    cell?: string

    @Matches(/(\d-\d-\d)|(\d)/)
    @IsString()
    @IsOptional()
    phone?: string

    constructor(part?: Partial<Contact>) { if (part) Object.assign(this, part) }
}