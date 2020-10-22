export class HiworksRequest<T> {
    data!: T
    constructor(part?: Partial<HiworksRequest<T>>) { if (part) Object.assign(this, part) }
}