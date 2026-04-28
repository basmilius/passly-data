import { adapter, ForeignData } from '@basmilius/http-client';
import { InsightDto, InsightSignalDto, InsightsResponseDto } from '#data/dto';
import { optionalArray } from '#data/util';

@adapter
export class StatisticsInsightsAdapter {
    static parseInsight(data: ForeignData): InsightDto {
        return new InsightDto(
            data.id,
            data.card_type,
            data.language,
            data.period_from,
            data.period_to,
            data.status,
            data.title ?? null,
            data.body_md ?? null,
            optionalArray(data.signals, StatisticsInsightsAdapter.parseSignal),
            data.payload ?? null,
            data.generated_on ?? null,
            !!data.is_stale
        );
    }

    static parseInsightsResponse(data: ForeignData): InsightsResponseDto {
        return new InsightsResponseDto(
            !!data.enabled,
            data.language,
            optionalArray(data.cards, StatisticsInsightsAdapter.parseInsight),
            data.last_generated_on ?? null
        );
    }

    static parseSignal(data: ForeignData): InsightSignalDto {
        return new InsightSignalDto(
            data.kind,
            data.text
        );
    }
}
