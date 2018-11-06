var javaVSC = /** @class */ (function () {
    function javaVSC(inputString) {
        this.stringToParse = inputString;
        this.parsedString = '';
    }
    Object.defineProperty(javaVSC.prototype, "newString", {
        set: function (newInputString) {
            this.stringToParse = newInputString;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(javaVSC.prototype, "transliteration", {
        get: function () {
            this.stringArray = this.stringToParse.split('');
            for (var i = 0; i < this.stringArray.length; i++) {
                if (this.stringArray[i] === '_') {
                    this.parsedString += this.stringArray[i + 1].toUpperCase();
                    i++;
                }
                else {
                    this.parsedString += this.stringArray[i];
                }
                if (this.stringArray[i].toUpperCase === this.stringArray[i]) {
                    return 'Error!!!';
                }
            }
            return this.parsedString;
        },
        enumerable: true,
        configurable: true
    });
    return javaVSC;
}());
var newStringObject = new javaVSC('some_example_sd');
console.log(newStringObject.transliteration);
newStringObject.newString = 'new_Error_string';
console.log(newStringObject.transliteration);
