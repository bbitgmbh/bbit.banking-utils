import { BbitMod10 } from './mod10';
import * as iso11649 from 'node-iso11649';
export class BbitBankingReference {
  public isReferenceValid(reference: string): boolean {
    if (!reference || reference.length > 25) {
      return false;
    }

    return iso11649.validate(reference);
  }

  public isQRReferenceValid(reference: string): boolean {
    if (!reference || reference.length !== 27) {
      return false;
    }
    const check = reference.substr(reference.length - 1);
    const calculated = BbitMod10.calc(reference.substr(0, reference.length - 1));
    return check === calculated.toString();
  }

  public isQRReference(reference: string): boolean {
    return reference && !reference.startsWith('RF');
  }

  public format(reference: string): string {
    if (this.isQRReference(reference)) {
      reference = reference.replace(/ /g, '');
      return [
        reference.substr(0, 2),
        reference.substr(2, 5),
        reference.substr(7, 5),
        reference.substr(12, 5),
        reference.substr(17, 5),
        reference.substr(22, 5),
      ].join(' ');
    } else {
      // Add a space after each group of 4 characters that are not at the end of the string
      return reference.replace(/ /g, '').replace(/(.{4})(?!$)/g, '$1 ');
    }
  }
}
