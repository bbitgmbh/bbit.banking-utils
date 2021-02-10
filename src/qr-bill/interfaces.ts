export interface IBbitQRBill {
  format?: BbitQRBillFormat;
  version?: BbitQRBillVersion;
  amount: number;
  currency: BbitQRBillCurrency;
  account: string;
  creditor: IBbitQRBillAddress;
  reference: string;
  debtor: IBbitQRBillAddress;
  unstructuredMessage?: string;
  billInformation?: string;
  language: BbitQRBillLanguage;
}

export interface IBbitQRBillAddress {
  type: BbitQRBillAddressType;
  name: string;
  address?: string;
  street?: string;
  buildingNumber?: string;
  postalCode: string;
  locality: string;
  country: string;
}

export enum BbitQRBillFormat {
  DEFAULT = 'default',
  DEFAULT_WITHOUT_LINES = 'default-without-lines',
  A4 = 'A4',
  A4_WITHOUT_LINES = 'a4-without-lines',
}

export enum BbitQRBillCurrency {
  CHF = 'CHF',
  EUR = 'EUR',
  USD = 'USD',
}

export enum BbitQRBillLanguage {
  DE = 'de-CH',
  FR = 'fr-CH',
  IT = 'it-CH',
  EN = 'en-US',
}

export enum BbitQRBillVersion {
  V2_0 = '0200',
}

export enum BbitQRBillAddressType {
  UNSTRUCTURED = 'K',
  STRUCTURED = 'S',
}

export interface IBbitQRBillTranslations {
  paymentPart: string;
  accountPayableTo: string;
  reference: string;
  additionalInfo: string;
  currency: string;
  amount: string;
  receipt: string;
  acceptancePoint: string;
  payableBy: string;
  payableByNameAddr: string;
}
