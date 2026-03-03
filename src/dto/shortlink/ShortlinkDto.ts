import { dto } from '@basmilius/http-client';
import type { DateTime } from 'luxon';

@dto
export class ShortlinkDto {
    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id = value;
    }

    get identifier(): string {
        return this.#identifier;
    }

    set identifier(value: string) {
        this.#identifier = value;
    }

    get hits(): number {
        return this.#hits;
    }

    set hits(value: number) {
        this.#hits = value;
    }

    get link(): string {
        return this.#link;
    }

    set link(value: string) {
        this.#link = value;
    }

    get target(): string {
        return this.#target;
    }

    set target(value: string) {
        this.#target = value;
    }

    get createdOn(): DateTime {
        return this.#createdOn;
    }

    set createdOn(value: DateTime) {
        this.#createdOn = value;
    }

    #id: string;
    #identifier: string;
    #hits: number;
    #link: string;
    #target: string;
    #createdOn: DateTime;

    constructor(id: string, identifier: string, hits: number, link: string, target: string, createdOn: DateTime) {
        this.#id = id;
        this.#identifier = identifier;
        this.#hits = hits;
        this.#link = link;
        this.#target = target;
        this.#createdOn = createdOn;
    }
}
