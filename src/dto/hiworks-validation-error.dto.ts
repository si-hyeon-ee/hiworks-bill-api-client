import { HiworksError } from "./hiworks-error.dto";

export class HiworksValidationError {
    errors!: HiworksError[]
    constructor(part?: Partial<HiworksValidationError>) { if (part) Object.assign(this, part) }
}