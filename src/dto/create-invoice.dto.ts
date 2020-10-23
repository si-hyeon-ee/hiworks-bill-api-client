import { ArrayMaxSize, ArrayNotEmpty, IsArray, IsIn, IsNotEmpty, IsNotEmptyObject, IsObject, IsOptional, IsString, ValidateNested } from "class-validator"
import { Information } from "./information.dto"
import { InvoiceType } from "./invoice-type.dto"
import { Invoicee } from "./invoicee.dto"
import { Invoicer } from "./invoicer.dto"
import { Item } from "./item.dto"


export class CreateInvoice {

    @IsIn(["Y", "N"])
    @IsString()
    @IsOptional()
    easySign?: "Y" | "N"

    @IsNotEmptyObject()
    @IsNotEmpty()
    @IsObject()
    @ValidateNested()
    information!: Information

    @IsNotEmpty()
    @ValidateNested()
    invoicer!: Invoicer | string


    @IsNotEmptyObject()
    @IsNotEmpty()
    @IsObject()
    @ValidateNested()
    invoicee!: Invoicee

    @IsNotEmptyObject()
    @IsNotEmpty()
    @IsObject()
    @ValidateNested()
    invoiceType!: InvoiceType

    @ArrayMaxSize(100)
    @ArrayNotEmpty()
    @IsNotEmpty()
    @IsArray()
    @ValidateNested()
    items!: Item[]
    constructor(part?: Partial<CreateInvoice>) { if (part) Object.assign(this, part) }
}