"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const lodash_1 = require("lodash");
const readFile = '/Users/jamesoncotter-ciambotti/Downloads/';
function readTaxes() {
    return JSON.parse(fs.readFileSync('dev/data/real-property-taxes.json'));
}
function validateTaxes(input) {
    const expected = [
        ':sid', ':id', ':position', ':created_at', ':created_meta', ':updated_at', ':updated_meta', ':meta', 'propertyid', 'block', 'lot', 'ward', 'sect', 'propertyaddress', 'lotsize', 'citytax', 'statetax', 'rescode', 'amountdue', 'asofdate', 'neighborhood', 'policedistrict', 'councildistrict', 'location', ':@computed_region_5kre_ccpb', ':@computed_region_gwq4_fjxs', ':@computed_region_s6p5_2pgr'
    ];
    const missing = lodash_1.difference(expected, input.meta['view']['columns'].map(d => d.fieldName));
    if (missing.length) {
        throw new Error(`columns in taxes object do not match expected!!!\n
        Columns not found: ${missing.join(', ')}`);
    }
}
validateTaxes(readTaxes());
console.log(readTaxes().meta['view']['columns'].map(d => d.fieldName).join('\',\''));
//# sourceMappingURL=index.js.map