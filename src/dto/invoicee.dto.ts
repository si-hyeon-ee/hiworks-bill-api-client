import { Contact } from "./contact.dto"

export class Invoicee {
    companyNumber!: string
    taxNumber?: string
    ceoName!: string
    companyName!: string
    companyAddress?: string
    bizType?: string
    bizClassification?: string
    partyTYpeCode?: "01" | "02" | "03"
    primaryContact!: Contact
    secondaryContact?: Contact
    constructor(part?: Partial<Invoicee>) { if (part) Object.assign(this, part) }
}