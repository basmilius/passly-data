import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';
import type { EmailTemplateLanguage, EmailTemplateType } from '#data/types';

@dto
export class EmailTemplateDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get type(): EmailTemplateType {
        return this.#type;
    }

    set type(value: EmailTemplateType) {
        this.#type = value;
    }

    get language(): EmailTemplateLanguage | null {
        return this.#language;
    }

    set language(value: EmailTemplateLanguage | null) {
        this.#language = value;
    }

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

    get createdOn(): DateTime {
        return this.#createdOn;
    }

    set createdOn(value: DateTime) {
        this.#createdOn = value;
    }

    get updatedOn(): DateTime {
        return this.#updatedOn;
    }

    set updatedOn(value: DateTime) {
        this.#updatedOn = value;
    }

    #id: string;
    #type: EmailTemplateType;
    #language: EmailTemplateLanguage | null;
    #subject: string;
    #content: string;
    #createdOn: DateTime;
    #updatedOn: DateTime;

    constructor(id: string, type: EmailTemplateType, language: EmailTemplateLanguage | null, subject: string, content: string, createdOn: DateTime, updatedOn: DateTime) {
        this.#id = id;
        this.#type = type;
        this.#language = language;
        this.#subject = subject;
        this.#content = content;
        this.#createdOn = createdOn;
        this.#updatedOn = updatedOn;
    }
}
