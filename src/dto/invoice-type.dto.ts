import { IsIn, IsNotEmpty, IsString } from "class-validator"

export class InvoiceType {

    @IsIn(["A", "B", "M", "N"])
    @IsString()
    @IsNotEmpty()
    typeCode!: "A" | "B" | "M" | "N"

    @IsIn(["S", "R"])
    @IsString()
    @IsNotEmpty()
    transactionType!: "S" | "R"

    @IsIn(["C", "R"])
    @IsString()
    @IsNotEmpty()
    purposeType!: "C" | "R"

    @IsIn(["A", "B"])
    @IsString()
    @IsNotEmpty()
    taxType!: "A" | "B"

    constructor(part?: Partial<InvoiceType>) { if (part) Object.assign(this, part) }
}