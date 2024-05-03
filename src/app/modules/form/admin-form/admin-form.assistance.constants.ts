export enum Roles {
  SYSTEM = 'system',
  USER = 'user',
}

export const MODEL_TYPE = 'gpt-4-32K-0613'

export const sampleFormFields = `[{"title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"section"},{"ValidationOptions":{"selectedValidation":null,"customVal":null},"allowPrefill":"<boolean>","lockPrefill":"<boolean>","title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"textfield"},{"ValidationOptions":{"selectedValidation":null,"customVal":null},"title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"textarea"},{"fieldOptions":["<string>"],"othersRadioButton":"<boolean>","title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"radiobutton"},{"ValidationOptions":{"customMax":null,"customMin":null},"fieldOptions":["<string>"],"othersRadioButton":"<boolean>","validateByValue":"<boolean>","title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"checkbox"},{"fieldOptions":["<string>"],"title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"dropdown"},{"title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"yes_no"},{"ratingOptions":{"steps":5,"shape":"Star"},"title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"rating"},{"autoReplyOptions":{"hasAutoReply":"<boolean>","autoReplySubject":"<string>","autoReplySender":"<string>","autoReplyMessage":"<string>","includeFormSummary":"<boolean>"},"isVerifiable":"<boolean>","hasAllowedEmailDomains":false,"allowedEmailDomains":[],"title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"email"},{"allowIntlNumbers":"<boolean>","isVerifiable":"<boolean>","title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"mobile"},{"allowIntlNumbers":"<boolean>","title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"homeno"},{"dateValidation":{"customMinDate":null,"customMaxDate":null,"selectedDateValidation":null},"invalidDays":[],"title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"date"},{"addMoreRows":"<boolean>","title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"table","columns":[{"ValidationOptions":{"customVal":null,"selectedValidation":null},"allowPrefill":"<boolean>","lockPrefill":"<boolean>","columnType":"textfield","required":"<boolean>","title":"<string>"}],"minimumRows":2,"maximumRows":null},{"title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"attachment","attachmentSize":"1"},{"title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"number","ValidationOptions":{"LengthValidationOptions":{"customVal":null,"selectedLengthValidation":null},"RangeValidationOptions":{"customMin":null,"customMax":null},"selectedValidation":null}},{"ValidationOptions":{"customMax":null,"customMin":null},"validateByValue":"<boolean>","title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"decimal"},{"title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"nric"},{"title":"<string>","description":"<string>","required":"<boolean>","disabled":"<boolean>","fieldType":"uen"}]`

export const fieldTypes = [
  'section',
  'textfield',
  'textarea',
  'radiobutton',
  'checkbox',
  'dropdown',
  'yes_no',
  'rating',
  'email',
  'mobile',
  'homeno',
  'date',
  'table',
  'attachment',
  'number',
  'decimal',
  'nric',
  'uen',
]
