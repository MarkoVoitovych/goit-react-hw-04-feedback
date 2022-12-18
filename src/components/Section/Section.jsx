import PropTypes from 'prop-types';
import { StatSection, Title } from './Section.styled';

const Section = props => {
  const { title, children } = props;

  return (
    <StatSection>
      <Title>{title}</Title>
      {children}
    </StatSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
