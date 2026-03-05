import { adapter, ForeignData } from '@basmilius/http-client';
import { DateTimeAdapter, FileSystemAdapter } from '#data/adapter';
import { MerchantDashboardKeyMetricsDto, MerchantDashboardUpcomingEventDto } from '#data/dto';
import { optional } from '#data/util';

@adapter
export class MerchantDashboardAdapter {
    static parseKeyMetrics(data: ForeignData): MerchantDashboardKeyMetricsDto {
        return new MerchantDashboardKeyMetricsDto(
            data.revenue,
            data.tickets,
            data.events,
            data.tasks
        );
    }

    static parseUpcomingEvent(data: ForeignData): MerchantDashboardUpcomingEventDto {
        return new MerchantDashboardUpcomingEventDto(
            data.id,
            data.name,
            data.description,
            optional(data.header_file, FileSystemAdapter.parsePicture),
            data.status,
            DateTimeAdapter.parseDateTime(data.starts_on),
            data.tickets_sold,
            data.tickets_total,
            data.sell_through_rate
        );
    }
}
