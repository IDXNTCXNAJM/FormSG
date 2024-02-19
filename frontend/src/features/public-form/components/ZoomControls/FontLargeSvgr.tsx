import { forwardRef, memo, SVGProps } from 'react'
import { chakra } from '@chakra-ui/react'

const MemoFontLargeSvgr = memo(
  forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        d="M7.53803 2.66666L3.53802 13.3333H4.96269L6.21269 9.99999H10.4547L11.7047 13.3333H13.1294L9.12936 2.66666H7.53803V2.66666ZM6.71202 8.66666L8.33336 4.34332L9.95469 8.66666H6.71202V8.66666Z"
        fill="#445072"
      />
    </svg>
  )),
)

export const FontLargeSvgr = chakra(MemoFontLargeSvgr)
