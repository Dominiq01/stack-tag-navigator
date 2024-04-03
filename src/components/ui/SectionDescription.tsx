import { SectionDescriptionTypes } from "../../types/SectionDescriptionTypes";

const SectionDescription: React.FC<SectionDescriptionTypes> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SectionDescription;
