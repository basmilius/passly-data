import { dto } from '@basmilius/http-client';

@dto
export class RenderedMailDto {
    get subject(): string {
        return this.#subject;
    }

    set subject(value: string) {
        this.#subject = value;
    }

    get content(): string {
        return this.#content;
    }

    set content(value: string) {
        this.#content = value;
    }

    #subject: string;
    #content: string;

    constructor(subject: string, content: string) {
        this.#subject = subject;
        this.#content = content;
    }
}
