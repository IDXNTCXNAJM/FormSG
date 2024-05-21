import { InputProps } from '~components/Input'

import { BaseFieldProps, FieldContainer } from '../FieldContainer'
import { EmailFieldSchema } from '../types'

import { EmailFieldInput } from './EmailFieldInput'

export interface EmailFieldProps extends BaseFieldProps {
  schema: EmailFieldSchema
  disableRequiredValidation?: boolean
  errorVariant?: 'white'
  inputProps?: Partial<InputProps>
}

/**
 * @precondition Must have a parent `react-hook-form#FormProvider` component.
 */
export const EmailField = ({
  schema,
  disableRequiredValidation,
  errorVariant,
  inputProps,
  selectedLanguage: language,
}: EmailFieldProps): JSX.Element => {
  return (
    <FieldContainer
      schema={schema}
      errorVariant={errorVariant}
      selectedLanguage={language}
    >
      <EmailFieldInput
        schema={schema}
        disableRequiredValidation={disableRequiredValidation}
        inputProps={inputProps}
      />
    </FieldContainer>
  )
}
