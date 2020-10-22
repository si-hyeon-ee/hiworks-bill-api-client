import { Information } from "./information.dto"
import { InvoiceType } from "./invoice-type.dto"
import { Invoicee } from "./invoicee.dto"
import { Invoicer } from "./invoicer.dto"
import { Item } from "./item.dto"


export class CreateInvoice {
    information!: Information
    invoicer!: Invoicer | string
    invoicee!: Invoicee
    invoiceType!: InvoiceType
    items!: Item[]
    constructor(part?: Partial<CreateInvoice>) { if (part) Object.assign(this, part) }
}