import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter } from '#data/adapter';
import { EmailTemplateDto, RenderedMailDto } from '#data/dto';

@adapter
export class EmailTemplateAdapter {
    static parseEmailTemplate(data: ForeignData): EmailTemplateDto {
        return new EmailTemplateDto(
            data.id,
            data.type,
            data.language ?? null,
            data.subject,
            data.content,
            DateTimeAdapter.parseDateTime(data.created_on),
            DateTimeAdapter.parseDateTime(data.updated_on)
        );
    }

    static parseRenderedMail(data: ForeignData): RenderedMailDto {
        return new RenderedMailDto(
            data.subject,
            data.content
        );
    }
}
