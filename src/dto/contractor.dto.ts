import { IsNotEmpty, IsOptional, IsString, Matches } from "class-validator"

export class Contractor {

    @IsString()
    @IsNotEmpty()
    companyNumber!: string

    @IsString()
    @Matches(/\d{4}/)
    @IsOptional()
    taxNumber?: string

    @IsString()
    @IsNotEmpty()
    ceoName!: string

    @IsString()
    @IsNotEmpty()
    companyName!: string

    @IsString()
    @IsOptional()
    companyAddress?: string

    @IsString()
    @IsOptional()
    bizType?: string

    @IsString()
    @IsOptional()
    bizClassification?: string

    constructor(part?: Partial<Contractor>) { if (part) Object.assign(this, part) }
}