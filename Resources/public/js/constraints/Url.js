//noinspection JSUnusedGlobalSymbols
/**
 * Checks if value is like an URL address
 * @constructor
 * @author dev.ymalcev@gmail.com
 */
function SymfonyComponentValidatorConstraintsUrl() {
    this.message = '';

    this.validate = function(value, element) {
        var regexp = /(ftp|https?):\/\/(www\.)?[\w\-\.@:%_\+~#=]+\.\w{2,3}(\/\w+)*(\?.*)?/;
        var errors = [];
        var f = FpJsFormValidator;

        if (!f.isValueEmpty(value)) {
            if (!/(ftp|https?):\/\//.test(value)) {
                value = 'http://' + value;
                element.domNode.value = value;
            }

            if (!regexp.test(value)) {
                errors.push(this.message.replace('{{ value }}', value));
            }
        }

        return errors;
    }
}
