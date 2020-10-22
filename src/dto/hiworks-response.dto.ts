export class HiworksResponse<T> {
    data!:T
    meta:any
    constructor(part?:Partial<HiworksResponse<T>>) { if(part) Object.assign(this, part) }
}