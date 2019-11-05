//noinspection JSUnusedGlobalSymbols
/**
 * Checks if value matches to the predefined regexp
 * @constructor
 * @author dev.ymalcev@gmail.com
 */
function SymfonyComponentValidatorConstraintsRegex() {
    this.message = '';
    this.pattern = '';
    this.match = true;

    this.validate = function(value) {
        var errors = [];
        var f = FpJsFormValidator;

        if (!f.isValueEmpty(value) && !this.pattern.test(value)) {
            errors.push(this.message.replace('{{ value }}', FpJsBaseConstraint.formatValue(value)));
        }

        return errors;
    };

    this.onCreate = function() {
        var pairDelimiters = {'(': ')', '[': ']', '{': '}', '<': '>'};
        var startDelimiter = this.pattern.trim()[0];
        var endDelimiter = pairDelimiters[startDelimiter] || startDelimiter;
        var startPosition = this.pattern.indexOf(startDelimiter) + 1;
        var endPosition = this.pattern.lastIndexOf(endDelimiter);
        var flagsPosition = this.pattern.lastIndexOf(endDelimiter);
        var flags = flagsPosition ? this.pattern.substr(flagsPosition + 1) : '';
        this.pattern = new RegExp(this.pattern.slice(startPosition, endPosition), flags);
    }
}
