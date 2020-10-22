export class Contact {
    name!:string
    email!:string
    cell?:string
    phone?:string
    constructor(part?:Partial<Contact>) { if(part) Object.assign(this, part) }
}