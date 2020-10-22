export class ResponseCreateInvoice {
    documentId!: string[]
    constructor(part?:Partial<ResponseCreateInvoice>) { if(part) Object.assign(this, part) }
}