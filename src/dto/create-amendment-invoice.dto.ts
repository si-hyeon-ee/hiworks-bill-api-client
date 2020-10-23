import { Amendment } from "./amendment.dto";
import { CreateInvoice } from "./create-invoice.dto";

export class CreateAmendmentInvoice {
    easySign?: "Y" | "N"
    amendment!: Amendment
    negative?: CreateInvoice
    positive?: CreateInvoice
    constructor(part?: Partial<CreateAmendmentInvoice>) { if (part) Object.assign(this, part) }
}