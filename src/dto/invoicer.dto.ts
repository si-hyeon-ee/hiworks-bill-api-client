import { IsNotEmpty, IsNotEmptyObject, IsObject, ValidateNested } from "class-validator"
import { Contact } from "./contact.dto"
import { Contractor } from "./contractor.dto"

export class Invoicer extends Contractor {

    @IsObject()
    @IsNotEmpty()
    @IsNotEmptyObject()
    @ValidateNested()
    primaryContact!: Contact

    constructor(part?: Partial<Invoicer>) {
        super(part)
        if (part) Object.assign(this, part)
    }
}