import { Amendment } from "./amendment.dto";
import { Information } from "./information.dto";
import { InvoiceType } from "./invoice-type.dto";
import { Invoicee } from "./invoicee.dto";
import { Invoicer } from "./invoicer.dto";
import { Item } from "./item.dto";
import { Mail } from "./mail.dto";
import { Status } from "./status.dto";

export class ResponseInvoice {
    information?: Information
    invoiceType?: InvoiceType
    invoicee?: Invoicee
    invoicer?: Invoicer
    items?: Item[]
    amendment?: Amendment
    mail?: Mail
    status?: Status
    constructor(part?: Partial<ResponseInvoice>) { if (part) Object.assign(this, part) }
}