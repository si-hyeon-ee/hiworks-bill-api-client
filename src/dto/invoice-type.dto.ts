export class InvoiceType {
    typeCode!: "A" | "B" | "M" | "N"
    transactionType!: "S" | "R"
    purposeType!: "C" | "R"
    taxType!: "A" | "B"
    constructor(part?: Partial<InvoiceType>) { if (part) Object.assign(this, part) }
}