import { IsNotEmpty, IsOptional } from "class-validator"

export class Item {
    @IsNotEmpty()
    month!: string

    @IsNotEmpty()
    day!: string

    @IsOptional()
    subject?: string

    @IsOptional()
    unit?: string

    @IsOptional()
    quantity?: string

    @IsOptional()
    unitPrice?: string

    @IsNotEmpty()
    supplyPrice!: string
    constructor(part?: Partial<Item>) { if (part) Object.assign(this, part) }
}