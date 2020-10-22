export class HiworksError {
    status!: string
    title!: string
    message!: string
    constructor(part?: Partial<HiworksError>) { if (part) Object.assign(this, part) }
}