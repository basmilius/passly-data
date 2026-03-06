import { type BaseResponse, BaseService, type Paginated, QueryString } from '@basmilius/http-client';
import { MerchantAdapter } from '#data/adapter';
import { MerchantDto } from '#data/dto';

export class AdminMerchantsService extends BaseService {
    async get(offset: number, limit: number): Promise<BaseResponse<Paginated<MerchantDto>>> {
        return await this
            .request('/admin/merchants')
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl')
                .append('offset', offset)
                .append('limit', limit))
            .bearerToken()
            .runPaginatedAdapter(MerchantAdapter.parseMerchant);
    }
}
