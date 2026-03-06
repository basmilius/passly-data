import { type BaseResponse, BaseService, QueryString } from '@basmilius/http-client';
import { MerchantAdapter } from '#data/adapter';
import { MerchantDto } from '#data/dto';

export class AdminMerchantService extends BaseService {
    async get(merchantId: string): Promise<BaseResponse<MerchantDto>> {
        return await this
            .request(`/admin/merchants/${merchantId}`)
            .method('get')
            .queryString(QueryString.builder()
                .append('language', 'nl'))
            .bearerToken()
            .runAdapter(MerchantAdapter.parseMerchant);
    }
}
