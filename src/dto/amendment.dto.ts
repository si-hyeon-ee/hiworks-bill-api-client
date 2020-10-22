export class Amendment {
    originalIssueId!:string
    modifyType!:"01"|"02"|"03"|"04"|"05"|"06"
    constructor(part?:Partial<Amendment>) { if(part) Object.assign(this, part) }
}