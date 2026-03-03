import { adapter, type ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter } from '#data/adapter';
import { ShortlinkDto } from '#data/dto';

@adapter
export class ShortlinkAdapter {
    static parse(data: ForeignData): ShortlinkDto {
        return new ShortlinkDto(
            data.id,
            data.identifier,
            data.hits,
            data.link,
            data.target,
            DateTimeAdapter.parseDateTime(data.createdOn)
        );
    }
}
