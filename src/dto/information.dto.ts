import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString,Matches } from "class-validator";

export class Information {
    
    @IsNotEmpty()
    @Matches(/\d{4}-\d{2}-\d{2}/)
    @IsString()
    issueDate!:string

    @IsString()
    @IsOptional()
    memo?:string

    @IsString()
    @IsOptional()
    bookNo?:string

    @IsString()
    @IsOptional()
    serial?:string

    @IsString()
    @IsOptional()
    description?:string

    @Transform(value=>Number(value))
    @IsNumber()
    @IsOptional()
    cash?:number

    @Transform(value=>Number(value))
    @IsNumber()
    @IsOptional()
    check?:number

    @Transform(value=>Number(value))
    @IsNumber()
    @IsOptional()
    draft?:number

    @Transform(value=>Number(value))
    @IsNumber()
    @IsOptional()
    uncollected?:number

    @Matches(/\d{18}|-\d{17}/)
    @IsString()
    @IsNotEmpty()
    totalSupplyPrice!:string

    @Matches(/\d{18}|-\d{17}/)
    @IsString()
    @IsNotEmpty()
    totalTax!:string
    
    constructor(part?:Partial<Information>) { if(part) Object.assign(this, part) }
}