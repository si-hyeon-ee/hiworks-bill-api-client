export class Mail {
    readStatus!: "C" | "R"
    sendDate!: string
    sendResultCode!: string
    sendResultMessage!: string
    constructor(part?: Partial<Mail>) { if (part) Object.assign(this, part) }
}