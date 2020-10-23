import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class Item {

    @IsString()
    @IsNotEmpty()
    month!: string

    @IsString()
    @IsNotEmpty()
    day!: string


    @IsString()
    @IsOptional()
    subject?: string

    @IsString()
    @IsOptional()
    unit?: string

    @IsString()
    @IsOptional()
    quantity?: string

    @IsString()
    @IsOptional()
    unitPrice?: string

    @IsString()
    @IsNotEmpty()
    supplyPrice!: string
    constructor(part?: Partial<Item>) { if (part) Object.assign(this, part) }
}