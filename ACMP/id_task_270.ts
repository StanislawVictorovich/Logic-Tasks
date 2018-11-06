/**
 * @description converting snake C++ case to java lowerCamelCase 
 */
interface languagesTransliteration {
  newString(newInputString: string);
  transliteration():string;
}

class javaVSC implements languagesTransliteration {
  private stringToParse: string;
  private stringArray: string[];
  private parsedString;
  constructor (inputString: string) {
      this.stringToParse = inputString;
      this.parsedString = '';
  }
  public set newString(newInputString: string) {
    this.stringToParse = newInputString;
  }
  public get transliteration():string {
      this.stringArray = this.stringToParse.split('');
      for (let i:number = 0; i < this.stringArray.length; i++) {
        if (this.stringArray[i] === '_') {
          this.parsedString += this.stringArray[i+1].toUpperCase();
          i++;
        } else {
          this.parsedString += this.stringArray[i];
        }
        if (this.stringArray[i].toUpperCase === this.stringArray[i]) {
          return 'Error!!!';
        }
      }
      return this.parsedString;
  }
}

const newStringObject = new javaVSC('some_example_sd');
console.log(newStringObject.transliteration);

newStringObject.newString = 'new_Error_string';
console.log(newStringObject.transliteration);
