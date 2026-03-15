export interface EmailTemplateEditorH1Block {
    type: 'h1';
    content: string;
}

export interface EmailTemplateEditorParagraphBlock {
    type: 'paragraph';
    content: string;
}

export interface EmailTemplateEditorDividerBlock {
    type: 'divider';
}

export interface EmailTemplateEditorSpacerBlock {
    type: 'spacer';
}

export interface EmailTemplateEditorButtonBlock {
    type: 'button';
    label: string;
    url: string;
}

export interface EmailTemplateEditorHeaderBlock {
    type: 'header';
    src: string;
}

export interface EmailTemplateEditorLogoBlock {
    type: 'logo';
}

export interface EmailTemplateEditorIfBlock {
    type: 'if';
    condition: string;
    children: EmailTemplateEditorBlock[];
}

export type EmailTemplateEditorBlock =
    | EmailTemplateEditorH1Block
    | EmailTemplateEditorParagraphBlock
    | EmailTemplateEditorDividerBlock
    | EmailTemplateEditorSpacerBlock
    | EmailTemplateEditorButtonBlock
    | EmailTemplateEditorHeaderBlock
    | EmailTemplateEditorLogoBlock
    | EmailTemplateEditorIfBlock;

export interface EmailTemplateEditorVariable {
    label: string;
    path: string;
}

export interface EmailTemplateEditorCondition {
    label: string;
    condition: string;
}

export interface EmailTemplateEditorContext {
    variables: EmailTemplateEditorVariable[];
    conditions: EmailTemplateEditorCondition[];
}
