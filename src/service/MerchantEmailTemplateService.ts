import { BaseResponse, BaseService } from '@basmilius/http-client';
import { CommonAdapter, EmailTemplateAdapter } from '#data/adapter';
import type { EmailTemplateDto, RenderedMailDto, StatusResponseDto } from '#data/dto';
import type { EmailTemplateLanguage } from '#data/types';

export class MerchantEmailTemplateService extends BaseService {
    async getPreview(merchantId: string, emailTemplateId: string): Promise<BaseResponse<RenderedMailDto>> {
        return await this
            .request(`/merchants/${merchantId}/email-templates/${emailTemplateId}/preview`)
            .method('get')
            .bearerToken()
            .runAdapter(EmailTemplateAdapter.parseRenderedMail);
    }

    async get(merchantId: string, emailTemplateId: string): Promise<BaseResponse<EmailTemplateDto>> {
        return await this
            .request(`/merchants/${merchantId}/email-templates/${emailTemplateId}`)
            .method('get')
            .bearerToken()
            .runAdapter(EmailTemplateAdapter.parseEmailTemplate);
    }

    async patch(merchantId: string, emailTemplateId: string, subject: string, content: string, language: EmailTemplateLanguage | null = null): Promise<BaseResponse<EmailTemplateDto>> {
        return await this
            .request(`/merchants/${merchantId}/email-templates/${emailTemplateId}`)
            .method('patch')
            .bearerToken()
            .body({
                subject,
                content,
                language
            })
            .runAdapter(EmailTemplateAdapter.parseEmailTemplate);
    }

    async delete(merchantId: string, emailTemplateId: string): Promise<BaseResponse<StatusResponseDto>> {
        return await this
            .request(`/merchants/${merchantId}/email-templates/${emailTemplateId}`)
            .method('delete')
            .bearerToken()
            .runAdapter(CommonAdapter.parseStatusResponse);
    }
}
