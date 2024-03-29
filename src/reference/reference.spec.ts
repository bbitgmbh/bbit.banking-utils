import { BbitBankingReference } from '../../src/reference/reference';

const validator = new BbitBankingReference();

describe('Reference', (): void => {
  it('isQRReference should work', (): void => {
    expect(validator.isQRReference('RF4714508655422864')).toBeFalsy();
    expect(validator.isQRReference('000000000000000012312312315')).toBeTruthy();
  });

  it('validateQRReference should work', (): void => {
    expect(validator.isQRReferenceValid('000000000000000012312312316')).toBeTruthy();
    expect(validator.isQRReferenceValid('000000000000000012312312315')).toBeFalsy();
  });

  it('validateQRReference should fail without reference', (): void => {
    expect(validator.isQRReferenceValid(null)).toBeFalsy();
  });

  it('validateQRReference should fail without to long input', (): void => {
    expect(validator.isQRReferenceValid('000000000000012312312316')).toBeFalsy();
  });

  it('validateReference should work', (): void => {
    expect(validator.isReferenceValid('000000000000000012312312316')).toBeFalsy();
    expect(validator.isReferenceValid('000000000000000012312312315')).toBeFalsy();
    expect(validator.isReferenceValid('RF00TEST')).toBeFalsy();
    expect(validator.isReferenceValid('RF4714508655422864')).toBeTruthy();
  });

  it('validateReference should fail without reference', (): void => {
    expect(validator.isReferenceValid(null)).toBeFalsy();
  });

  it('validateReference should fail without to long input', (): void => {
    expect(validator.isReferenceValid('0000000000000000000012312312316')).toBeFalsy();
  });

  it('format should fail without to long input', (): void => {
    expect(validator.format('000000000000000012312312316')).toBe('00 00000 00000 00001 23123 12316');
    expect(validator.format('RF4714508655422864')).toBe('RF47 1450 8655 4228 64');
  });
});
