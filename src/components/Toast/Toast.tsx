import type {Variant} from "../../types/variant";
import { useThemeContext } from "../../theme/ThemeContext";

interface ToastProps {
  text: string;
  variant: Variant;
  
}

const Button: React.FC<ToastProps> = ({
  text,
  variant = "primary",
}) => {
  const { colors } = useThemeContext();
  const base = `px-4 py-2 rounded text-white font-medium transition-colors duration-200 `
  return (
    <button className={`${base} ${colors[variant]}`} >
      {text}
    </button>
  );
};

export default Button;
