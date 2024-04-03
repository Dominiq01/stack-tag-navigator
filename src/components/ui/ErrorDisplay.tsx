import ErrorOutline from "@mui/icons-material/ErrorOutline";
import { ErrorDisplayTypes } from "../../types/ErrorDisplayTypes";
import '../../index.css';

const ErrorDisplay: React.FC<ErrorDisplayTypes> = ({
  errorMessage = "Something went wrong",
}) => {
  return (
    <div className="error-container">
      <ErrorOutline className="error-icon" />
      <div className="error-text">{errorMessage}</div>
    </div>
  );
};

export default ErrorDisplay;
