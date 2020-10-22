import Axios, { AxiosInstance } from "axios";


interface Token {
    office: string
    access: string
}


export class Client {
    protected readonly http: AxiosInstance
    constructor({ url, tokens }: {
        url: string,
        tokens: Token
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
    }

    async invoiceCreateOne(payload:any){
        return await this.http.post(`/v4/invoices`,payload)
    }

    async invoiceFindOne(documentID:string) {
        return await this.http.get(`/v4/invoices/${documentID}`)
    }

    async invoiceDeleteOne(documentID:string) {
        return await this.http.delete(`/v4/invoices/${documentID}`)
    }
}