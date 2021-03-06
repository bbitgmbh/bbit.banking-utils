import { BbitIBANSpecification } from './specification';
export class BbitIBAN {
  private _countries: { [key: string]: BbitIBANSpecification } = {};

  public constructor() {
    this._addSpecification(new BbitIBANSpecification('AD', 24, 'F04F04A12', 'AD1200012030200359100100'));
    this._addSpecification(new BbitIBANSpecification('AE', 23, 'F03F16', 'AE070331234567890123456'));
    this._addSpecification(new BbitIBANSpecification('AL', 28, 'F08A16', 'AL47212110090000000235698741'));
    this._addSpecification(new BbitIBANSpecification('AT', 20, 'F05F11', 'AT611904300234573201'));
    this._addSpecification(new BbitIBANSpecification('AZ', 28, 'U04A20', 'AZ21NABZ00000000137010001944'));
    this._addSpecification(new BbitIBANSpecification('BA', 20, 'F03F03F08F02', 'BA391290079401028494'));
    this._addSpecification(new BbitIBANSpecification('BE', 16, 'F03F07F02', 'BE68539007547034'));
    this._addSpecification(new BbitIBANSpecification('BG', 22, 'U04F04F02A08', 'BG80BNBG96611020345678'));
    this._addSpecification(new BbitIBANSpecification('BH', 22, 'U04A14', 'BH67BMAG00001299123456'));
    this._addSpecification(new BbitIBANSpecification('BR', 29, 'F08F05F10U01A01', 'BR9700360305000010009795493P1'));
    this._addSpecification(new BbitIBANSpecification('CH', 21, 'F05A12', 'CH9300762011623852957'));
    this._addSpecification(new BbitIBANSpecification('CR', 22, 'F04F14', 'CR72012300000171549015'));
    this._addSpecification(new BbitIBANSpecification('CY', 28, 'F03F05A16', 'CY17002001280000001200527600'));
    this._addSpecification(new BbitIBANSpecification('CZ', 24, 'F04F06F10', 'CZ6508000000192000145399'));
    this._addSpecification(new BbitIBANSpecification('DE', 22, 'F08F10', 'DE89370400440532013000'));
    this._addSpecification(new BbitIBANSpecification('DK', 18, 'F04F09F01', 'DK5000400440116243'));
    this._addSpecification(new BbitIBANSpecification('DO', 28, 'U04F20', 'DO28BAGR00000001212453611324'));
    this._addSpecification(new BbitIBANSpecification('EE', 20, 'F02F02F11F01', 'EE382200221020145685'));
    this._addSpecification(new BbitIBANSpecification('ES', 24, 'F04F04F01F01F10', 'ES9121000418450200051332'));
    this._addSpecification(new BbitIBANSpecification('FI', 18, 'F06F07F01', 'FI2112345600000785'));
    this._addSpecification(new BbitIBANSpecification('FO', 18, 'F04F09F01', 'FO6264600001631634'));
    this._addSpecification(new BbitIBANSpecification('FR', 27, 'F05F05A11F02', 'FR1420041010050500013M02606'));
    this._addSpecification(new BbitIBANSpecification('GB', 22, 'U04F06F08', 'GB29NWBK60161331926819'));
    this._addSpecification(new BbitIBANSpecification('GE', 22, 'U02F16', 'GE29NB0000000101904917'));
    this._addSpecification(new BbitIBANSpecification('GI', 23, 'U04A15', 'GI75NWBK000000007099453'));
    this._addSpecification(new BbitIBANSpecification('GL', 18, 'F04F09F01', 'GL8964710001000206'));
    this._addSpecification(new BbitIBANSpecification('GR', 27, 'F03F04A16', 'GR1601101250000000012300695'));
    this._addSpecification(new BbitIBANSpecification('GT', 28, 'A04A20', 'GT82TRAJ01020000001210029690'));
    this._addSpecification(new BbitIBANSpecification('HR', 21, 'F07F10', 'HR1210010051863000160'));
    this._addSpecification(new BbitIBANSpecification('HU', 28, 'F03F04F01F15F01', 'HU42117730161111101800000000'));
    this._addSpecification(new BbitIBANSpecification('IE', 22, 'U04F06F08', 'IE29AIBK93115212345678'));
    this._addSpecification(new BbitIBANSpecification('IL', 23, 'F03F03F13', 'IL620108000000099999999'));
    this._addSpecification(new BbitIBANSpecification('IS', 26, 'F04F02F06F10', 'IS140159260076545510730339'));
    this._addSpecification(new BbitIBANSpecification('IT', 27, 'U01F05F05A12', 'IT60X0542811101000000123456'));
    this._addSpecification(new BbitIBANSpecification('KW', 30, 'U04A22', 'KW81CBKU0000000000001234560101'));
    this._addSpecification(new BbitIBANSpecification('KZ', 20, 'F03A13', 'KZ86125KZT5004100100'));
    this._addSpecification(new BbitIBANSpecification('LB', 28, 'F04A20', 'LB62099900000001001901229114'));
    this._addSpecification(new BbitIBANSpecification('LC', 32, 'U04F24', 'LC07HEMM000100010012001200013015'));
    this._addSpecification(new BbitIBANSpecification('LI', 21, 'F05A12', 'LI21088100002324013AA'));
    this._addSpecification(new BbitIBANSpecification('LT', 20, 'F05F11', 'LT121000011101001000'));
    this._addSpecification(new BbitIBANSpecification('LU', 20, 'F03A13', 'LU280019400644750000'));
    this._addSpecification(new BbitIBANSpecification('LV', 21, 'U04A13', 'LV80BANK0000435195001'));
    this._addSpecification(new BbitIBANSpecification('MC', 27, 'F05F05A11F02', 'MC5811222000010123456789030'));
    this._addSpecification(new BbitIBANSpecification('MD', 24, 'U02A18', 'MD24AG000225100013104168'));
    this._addSpecification(new BbitIBANSpecification('ME', 22, 'F03F13F02', 'ME25505000012345678951'));
    this._addSpecification(new BbitIBANSpecification('MK', 19, 'F03A10F02', 'MK07250120000058984'));
    this._addSpecification(new BbitIBANSpecification('MR', 27, 'F05F05F11F02', 'MR1300020001010000123456753'));
    this._addSpecification(new BbitIBANSpecification('MT', 31, 'U04F05A18', 'MT84MALT011000012345MTLCAST001S'));
    this._addSpecification(new BbitIBANSpecification('MU', 30, 'U04F02F02F12F03U03', 'MU17BOMM0101101030300200000MUR'));
    this._addSpecification(new BbitIBANSpecification('NL', 18, 'U04F10', 'NL91ABNA0417164300'));
    this._addSpecification(new BbitIBANSpecification('NO', 15, 'F04F06F01', 'NO9386011117947'));
    this._addSpecification(new BbitIBANSpecification('PK', 24, 'U04A16', 'PK36SCBL0000001123456702'));
    this._addSpecification(new BbitIBANSpecification('PL', 28, 'F08F16', 'PL61109010140000071219812874'));
    this._addSpecification(new BbitIBANSpecification('PS', 29, 'U04A21', 'PS92PALS000000000400123456702'));
    this._addSpecification(new BbitIBANSpecification('PT', 25, 'F04F04F11F02', 'PT50000201231234567890154'));
    this._addSpecification(new BbitIBANSpecification('RO', 24, 'U04A16', 'RO49AAAA1B31007593840000'));
    this._addSpecification(new BbitIBANSpecification('RS', 22, 'F03F13F02', 'RS35260005601001611379'));
    this._addSpecification(new BbitIBANSpecification('SA', 24, 'F02A18', 'SA0380000000608010167519'));
    this._addSpecification(new BbitIBANSpecification('SE', 24, 'F03F16F01', 'SE4550000000058398257466'));
    this._addSpecification(new BbitIBANSpecification('SI', 19, 'F05F08F02', 'SI56263300012039086'));
    this._addSpecification(new BbitIBANSpecification('SK', 24, 'F04F06F10', 'SK3112000000198742637541'));
    this._addSpecification(new BbitIBANSpecification('SM', 27, 'U01F05F05A12', 'SM86U0322509800000000270100'));
    this._addSpecification(new BbitIBANSpecification('ST', 25, 'F08F11F02', 'ST68000100010051845310112'));
    this._addSpecification(new BbitIBANSpecification('TL', 23, 'F03F14F02', 'TL380080012345678910157'));
    this._addSpecification(new BbitIBANSpecification('TN', 24, 'F02F03F13F02', 'TN5910006035183598478831'));
    this._addSpecification(new BbitIBANSpecification('TR', 26, 'F05F01A16', 'TR330006100519786457841326'));
    this._addSpecification(new BbitIBANSpecification('VG', 24, 'U04F16', 'VG96VPVG0000012345678901'));
    this._addSpecification(new BbitIBANSpecification('XK', 20, 'F04F10F02', 'XK051212012345678906'));
    this._addSpecification(new BbitIBANSpecification('AO', 25, 'F21', 'AO69123456789012345678901'));
    this._addSpecification(new BbitIBANSpecification('BF', 27, 'F23', 'BF2312345678901234567890123'));
    this._addSpecification(new BbitIBANSpecification('BI', 16, 'F12', 'BI41123456789012'));
    this._addSpecification(new BbitIBANSpecification('BJ', 28, 'F24', 'BJ39123456789012345678901234'));
    this._addSpecification(new BbitIBANSpecification('CI', 28, 'U01F23', 'CI17A12345678901234567890123'));
    this._addSpecification(new BbitIBANSpecification('CM', 27, 'F23', 'CM9012345678901234567890123'));
    this._addSpecification(new BbitIBANSpecification('CV', 25, 'F21', 'CV30123456789012345678901'));
    this._addSpecification(new BbitIBANSpecification('DZ', 24, 'F20', 'DZ8612345678901234567890'));
    this._addSpecification(new BbitIBANSpecification('IR', 26, 'F22', 'IR861234568790123456789012'));
    this._addSpecification(new BbitIBANSpecification('JO', 30, 'A04F22', 'JO15AAAA1234567890123456789012'));
    this._addSpecification(new BbitIBANSpecification('MG', 27, 'F23', 'MG1812345678901234567890123'));
    this._addSpecification(new BbitIBANSpecification('ML', 28, 'U01F23', 'ML15A12345678901234567890123'));
    this._addSpecification(new BbitIBANSpecification('MZ', 25, 'F21', 'MZ25123456789012345678901'));
    this._addSpecification(new BbitIBANSpecification('QA', 29, 'U04A21', 'QA30AAAA123456789012345678901'));
    this._addSpecification(new BbitIBANSpecification('SN', 28, 'U01F23', 'SN52A12345678901234567890123'));
    this._addSpecification(new BbitIBANSpecification('UA', 29, 'F25', 'UA511234567890123456789012345'));
  }

  private _addSpecification(iban: BbitIBANSpecification): void {
    this._countries[iban.countryCode] = iban;
  }

  /**
   * Outputs the IBAN in electronic format
   */
  public electronicFormat(iban: string): string {
    const NON_ALPHANUMERIC = /[^a-zA-Z0-9]/g;
    return iban.replace(NON_ALPHANUMERIC, '').toUpperCase();
  }

  /**
   * Convert an IBAN to a BBAN.
   */
  public toBBAN(iban: string, separator = ' '): string {
    iban = this.electronicFormat(iban);
    const countryStructure = this._countries[iban.slice(0, 2)];
    if (!countryStructure) {
      throw new Error('No country with code ' + iban.slice(0, 2));
    }
    return countryStructure.toBBAN(iban, separator);
  }

  /**
   * Convert the passed BBAN to an IBAN for this country specification.
   * Please note that <i>"generation of the IBAN shall be the exclusive responsibility of the bank/branch servicing the account"</i>.
   * This method implements the preferred algorithm described in http://en.wikipedia.org/wiki/International_Bank_Account_Number#Generating_IBAN_check_digits
   */
  public fromBBAN(countryCode: string, bban: string): string {
    const countryStructure = this._countries[countryCode];
    if (!countryStructure) {
      throw new Error('No country with code ' + countryCode);
    }
    return countryStructure.fromBBAN(this.electronicFormat(bban));
  }

  /**
   * Check the validity of the passed BBAN.
   */
  public isValidBBAN(countryCode: string, bban: string): boolean {
    if (!bban || bban.length === 0) return false;
    const countryStructure = this._countries[countryCode];
    if (!countryStructure) {
      throw new Error('No country with code ' + countryCode);
    }
    return countryStructure && countryStructure.isValidBBAN(this.electronicFormat(bban));
  }

  /**
   * Outputs the IBAN in print format
   */
  public printFormat(iban: string, separator = ' '): string {
    const EVERY_FOUR_CHARS = /(.{4})(?!$)/g;
    return this.electronicFormat(iban).replace(EVERY_FOUR_CHARS, '$1' + separator);
  }

  /**
   * Check if an IBAN is valid.
   *
   * @param iban the IBAN to validate.
   * @returns true if the passed IBAN is valid, false otherwise
   */
  public isValid(iban: string): boolean {
    if (!iban || iban.length === 0) return false;
    iban = this.electronicFormat(iban);
    const countryStructure = this._countries[iban.slice(0, 2)];
    return !!countryStructure && countryStructure.isValid(iban);
  }

  /**
   * Check if the passed iban is a qr iban
   *
   * @param iban the iban to check
   * @returns true if it is a qr iban, false otherwise
   */
  public isQRIBAN(iban: string): boolean {
    if (!iban || iban.length === 0) return false;
    iban = this.electronicFormat(iban);
    const countryStructure = this._countries[iban.slice(0, 2)];
    return !!countryStructure && countryStructure.isQRIBAN(iban);
  }
}
