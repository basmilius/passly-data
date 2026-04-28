import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { StatisticsInsightsAdapter } from '#data/adapter';
import type { InsightsResponseDto } from '#data/dto';

export class MerchantStatisticsInsightsService extends BaseService {
    async getInsights(merchantId: string): Promise<BaseResponse<InsightsResponseDto>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/insights`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(StatisticsInsightsAdapter.parseInsightsResponse);
    }
}
