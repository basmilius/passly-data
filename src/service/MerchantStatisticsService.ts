import { BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import type { ApexOptions } from 'apexcharts';

export class MerchantStatisticsService extends BaseService {
    async getRevenueTrend(merchantId: string): Promise<BaseResponse<ApexOptions>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/revenue-trend`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }

    async getStatus(merchantId: string): Promise<BaseResponse<boolean>> {
        return await this
            .request(`/merchants/${merchantId}/statistics/status`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .run();
    }
}
