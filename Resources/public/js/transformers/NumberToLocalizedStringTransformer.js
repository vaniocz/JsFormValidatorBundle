function SymfonyComponentFormExtensionCoreDataTransformerNumberToLocalizedStringTransformer() {
    this.grouping = false;
    this.decimalSeparator = null;
    this.groupingSeparator = null;

    this.reverseTransform = function(value) {
        if (this.grouping && this.decimalSeparator === this.groupingSeparator) {
            throw new Error('Decimal separator must not be the same as grouping separator.');
        }

        if (typeof value === 'number') {
            return value;
        }

        if (this.decimalSeparator !== '.') {
            value = String(value).replace(this.decimalSeparator, '.');
        }

        if (this.grouping && this.groupingSeparator) {
            value = value.replace(new RegExp('\\' + this.groupingSeparator, 'g'), '');
        }

        return Number(value);
    }
}
