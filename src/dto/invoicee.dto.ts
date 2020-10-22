import { IsIn, IsNotEmpty, IsNotEmptyObject, IsObject, IsOptional, IsString, ValidateNested } from "class-validator"
import { Contact } from "./contact.dto"
import { Contractor } from "./contractor.dto"

export class Invoicee extends Contractor {

    @IsIn(["01","02","03"])
    @IsString()
    @IsOptional()
    partyTypeCode?: "01" | "02" | "03"

    @IsObject()
    @IsNotEmptyObject()
    @IsNotEmpty()
    @ValidateNested()
    primaryContact!: Contact

    @IsObject()
    @ValidateNested()
    @IsOptional()
    secondaryContact?: Contact
    constructor(part?: Partial<Invoicee>) {
        super(part)
        if (part) Object.assign(this, part)
    }
}