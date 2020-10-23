import Axios, { AxiosInstance } from "axios";
import { validateOrReject } from "class-validator";
import { CreateAmendmentInvoice } from "./dto/create-amendment-invoice.dto";
import { CreateInvoice } from "./dto/create-invoice.dto";
import { HiworksError } from "./dto/hiworks-error.dto";
import { HiworksRequest } from "./dto/hiworks-request.dto";
import { HiworksResponse } from "./dto/hiworks-response.dto";
import { HiworksValidationError } from "./dto/hiworks-validation-error.dto";
import { ResponseCreateInvoice } from "./dto/response-create-invoice.dto";
import { ResponseInvoice } from "./dto/response-invoice.dto";


interface Token {
    office: string
    access: string
}

export class Client {
    protected readonly http: AxiosInstance
    constructor({ url, tokens, resellerCode }: {
        url: string,
        tokens: Token,
        resellerCode?: string
    }) {
        this.http = Axios.create({
            baseURL: url,
            headers: {
                "Office-Authorization": tokens.office,
                "Bill-Access-Authorization": tokens.access
            },
            validateStatus: (status) => {
                if (status < 500) return true
                if (status == 503) return true
                return false
            }
        })

        if (resellerCode !== undefined) this.http.defaults.headers['X-Reseller-Code'] = resellerCode
    }

    async invoiceCreateOne(data: CreateInvoice, withValidation?: true) {
        if (withValidation) await validateOrReject(data)
        const payload = new HiworksRequest<CreateInvoice>({ data })
        const response = await this.http.post<HiworksResponse<ResponseCreateInvoice> | HiworksValidationError>(`/v4/invoices`, payload)
        if (response.status == 503) throw new Error("점검중입니다")
        if (this.isValidationError(response.data)) return response.data.errors
        return response.data.data
    }

    async invoiceFindOne(documentID: string) {
        const response = await this.http.get<HiworksResponse<ResponseInvoice>>(`/v4/invoices/${documentID}`)
        if (response.status == 503) throw new Error("점검중입니다")
        return response.data.data
    }

    async invoiceDeleteOne(documentID: string) {
        const response = await this.http.delete<undefined | HiworksResponse<HiworksError>>(`/v4/invoices/${documentID}`)
        if (response.status == 503) throw new Error("점검중입니다")
        return response.status == 302 ? true : response.data?.data
    }

    async amendmentCreateOne(data: CreateAmendmentInvoice, withValidation?: true) {
        if (withValidation) await validateOrReject(data)
        const payload = new HiworksRequest<CreateAmendmentInvoice>({ data })
        const response = await this.http.post<HiworksResponse<ResponseCreateInvoice> | HiworksValidationError>(`/v4/invoices/amendment`, payload)
        if (response.status == 503) throw new Error("점검중입니다")
        if (this.isValidationError(response.data)) return response.data.errors
        return response.data.data
    }


    protected isValidationError(data: HiworksResponse<ResponseCreateInvoice> | HiworksValidationError): data is HiworksValidationError {
        return (<HiworksValidationError>data).errors !== undefined
    }
}