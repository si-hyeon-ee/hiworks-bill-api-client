export class Status {
    approvalStatus!: "W" | "T" | "R" | "S" | "B"

    declareStatus!: "0" | "1" | "2" | "3" | "4" | "5"

    declareStatusCode!: string
    
    constructor(part?: Partial<Status>) { if (part) Object.assign(this, part) }
}