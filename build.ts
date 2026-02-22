import { build, clean, copy, dts } from '@basmilius/tools';

await build({
    entrypoints: ['src/index.ts'],
    target: 'browser',
    packages: 'external',
    plugins: [
        clean('./dist'),
        copy('./src/types/auth.ts', './dist/types/auth.d.ts'),
        copy('./src/types/event.ts', './dist/types/event.d.ts'),
        copy('./src/types/payment.ts', './dist/types/payment.d.ts'),
        copy('./src/types/product.ts', './dist/types/product.d.ts'),
        copy('./src/types/finance.ts', './dist/types/finance.d.ts'),
        copy('./src/types/publicShop.ts', './dist/types/publicShop.d.ts'),
        copy('./src/types/order.ts', './dist/types/order.d.ts'),
        copy('./src/types/general.ts', './dist/types/general.d.ts'),
        copy('./src/types/ticket.ts', './dist/types/ticket.d.ts'),
        dts()
    ],
    tsconfig: './tsconfig.json'
});
