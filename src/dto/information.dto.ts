export class Information {
    issueDate!:string
    memo?:string
    bookNo?:string
    serial?:string
    description?:string
    cash?:number
    check?:number
    draft?:number
    uncollected?:number
    totalSupplyPrice!:string
    totalTax!:string
    constructor(part?:Partial<Information>) { if(part) Object.assign(this, part) }
}