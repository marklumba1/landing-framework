import type {Variant} from "../../types/variant";
import { useThemeContext } from "../../theme/ThemeContext";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant: Variant;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  const { colors } = useThemeContext();
  const base = `px-4 py-2 rounded text-white font-medium transition-colors duration-200 `
  return (
    <button className={`${base} ${colors[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
