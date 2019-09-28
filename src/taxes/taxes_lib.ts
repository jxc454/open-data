const fs = require('fs')
import { difference } from 'lodash'

export function readTaxes(): { meta: object; data: [object] } {
    // return JSON.parse(fs.readFileSync('dev/data/real-property-taxes.json'));
    return JSON.parse(
        fs.readFileSync(
            '/Users/jamesoncotter-ciambotti/Downloads/real-property-taxes.json'
        )
    )
}

export function validateTaxes(input: { meta: object; data: [object] }): void {
    const expected = [
        ':sid',
        ':id',
        ':position',
        ':created_at',
        ':created_meta',
        ':updated_at',
        ':updated_meta',
        ':meta',
        'propertyid',
        'block',
        'lot',
        'ward',
        'sect',
        'propertyaddress',
        'lotsize',
        'citytax',
        'statetax',
        'rescode',
        'amountdue',
        'asofdate',
        'neighborhood',
        'policedistrict',
        'councildistrict',
        'location',
        ':@computed_region_5kre_ccpb',
        ':@computed_region_gwq4_fjxs',
        ':@computed_region_s6p5_2pgr',
    ]
    const missing = difference(
        expected,
        input.meta['view']['columns'].map(d => d.fieldName)
    );

    if (missing.length) {
        throw new Error(`columns in taxes object do not match expected!!!\n
        Columns not found: ${missing.join(', ')}`)
    }
}
