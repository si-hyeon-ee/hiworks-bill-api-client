import { IsIn, IsNotEmpty, IsString } from "class-validator"

export class Amendment {

    @IsString()
    @IsNotEmpty()
    originalIssueId!: string

    @IsIn(["01", "02", "03", "04", "05", "06"])
    @IsString()
    @IsNotEmpty()
    modifyType!: "01" | "02" | "03" | "04" | "05" | "06"

    constructor(part?: Partial<Amendment>) { if (part) Object.assign(this, part) }
}