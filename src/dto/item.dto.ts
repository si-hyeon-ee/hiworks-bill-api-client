export class Item {
    month!: string
    day!: string
    subject?: string
    unit?: string
    quantity?: string
    unitPrice?: string
    supplyPrice!: string
    constructor(part?: Partial<Item>) { if (part) Object.assign(this, part) }
}