import { Contact } from "./contact.dto"

export class Invoicer {
    companyNumber!: string
    taxNumber?: string
    ceoName!: string
    companyName!: string
    companyAddress?: string
    bizType?: string
    bizClassification?: string
    primaryContact!: Contact
    constructor(part?: Partial<Invoicer>) { if (part) Object.assign(this, part) }
}