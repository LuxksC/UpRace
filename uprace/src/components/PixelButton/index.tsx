import { ReactNode, ButtonHTMLAttributes } from 'react'

import '../PixelButton/index.scss'

type PixelButtonProps = 
ButtonHTMLAttributes<HTMLButtonElement> & 
{ children?: ReactNode,
  color?: string,
  formButton?: boolean,
}

export function PixelButton({
  children,
  color = 'hsl(var(--hue) 100% 59%)',
  formButton = false,
  ...props
}: PixelButtonProps) {
  return (
    <div id='pixel-button'>
      <svg width="319" height="55" viewBox="0 0 319 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M319 43.0833V11H311.554V8H305.37V4H297.924V0H20.1739V4H13.8696V8H6.30432V11H0V43.0833H6.30432V47.7222H13.8696V51.3611H20.1739V55H297.924V51.3611H305.37V47.7222H311.554V43.0833H319Z" fill={color}/>
      </svg>
      <button type={formButton ? "submit" : 'button'}{...props}>{children}</button>
    </div>
  )
};