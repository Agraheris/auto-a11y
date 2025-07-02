import  useId  from '../../hooks/useId'

interface ButtonProps {
  children: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ children, variant, disabled, onClick }: ButtonProps) {
  return (
    <button 
  id={useId('btn')}
  type="button"
  className= {variant}
  disabled={disabled}
  onClick={onClick}

  >
  {children}
</button>
  )
}

export default Button