import { useRef } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import {
  Box,
  chakra,
  Divider,
  forwardRef,
  NumberInputProps as ChakraNumberInputProps,
  useFormControlProps,
  useMultiStyleConfig,
  useNumberInput,
} from '@chakra-ui/react'

import IconButton from '~components/IconButton'

export interface NumberInputProps extends ChakraNumberInputProps {
  /**
   * Whether the input is in a prefilled state.
   */
  isPrefilled?: boolean
  /**
   * Whether the input is in a success state.
   */
  isSuccess?: boolean
  /**
   * Whether to show the increment and decrement steppers. Defaults to true.
   */
  showSteppers?: boolean

  /**
   * Whether to prevent default on user pressing the 'Enter' key.
   */
  preventDefaultOnEnter?: boolean

  placeholder?: string
}

export const NumberInput = forwardRef<NumberInputProps, 'input'>(
  (
    {
      showSteppers = true,
      clampValueOnBlur = false,
      focusInputOnChange = false,
      isSuccess,
      isPrefilled,
      colorScheme,
      preventDefaultOnEnter,
      ...props
    },
    ref,
  ) => {
    const styles = useMultiStyleConfig('NumberInput', {
      ...props,
      colorScheme,
      isSuccess,
      isPrefilled,
    })

    const stepperWrapperRef = useRef<HTMLDivElement | null>(null)

    /**
     * Used here so this component can retrieve a parent FormControl's props, if
     * any. This allows a FormControl parent component to pass props such as
     * isInvalid, isDisabled, etc, to this component.
     */
    const controlProps = useFormControlProps(props)
    const {
      htmlProps,
      getInputProps,
      getIncrementButtonProps,
      getDecrementButtonProps,
    } = useNumberInput({
      ...controlProps,
      clampValueOnBlur,
      focusInputOnChange,
    })

    const inputProps = getInputProps({ placeholder: props.placeholder })

    const incProps = getIncrementButtonProps()
    const decProps = getDecrementButtonProps()

    const inputEndPadding = showSteppers
      ? stepperWrapperRef.current?.offsetWidth
      : undefined

    return (
      <Box {...htmlProps} __css={styles.root}>
        {/* Using base input wrapper instead of `Input` component as the Input 
        component strips out some props such as `aria-invalid`, resulting in
        incorrect styling */}
        <chakra.input
          {...inputProps}
          paddingInlineEnd={inputEndPadding}
          // This flag should be set for form input fields, to prevent refresh on enter if form only has one input
          {...(preventDefaultOnEnter
            ? {
                onKeyDown: (e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                  }
                },
              }
            : {})}
          // Passing in ref to the input element so that it can be focused by
          // the parent.
          // No point passing the ref to the div wrapper as the main component
          // is this input.
          ref={ref}
          __css={styles.field}
        />
        {showSteppers && (
          <Box __css={styles.stepperWrapper} ref={stepperWrapperRef}>
            <IconButton
              sx={styles.stepperButton}
              colorScheme={colorScheme}
              aria-hidden
              aria-label="Decrement number"
              variant="clear"
              icon={<BiMinus />}
              {...decProps}
            />
            <Divider sx={styles.stepperDivider} orientation="vertical" />
            <IconButton
              sx={styles.stepperButton}
              colorScheme={colorScheme}
              aria-hidden
              aria-label="Increment number"
              variant="clear"
              icon={<BiPlus />}
              {...incProps}
            />
          </Box>
        )}
      </Box>
    )
  },
)

NumberInput.displayName = 'NumberInput'
