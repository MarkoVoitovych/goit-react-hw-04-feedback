import PropTypes from 'prop-types';
import { Wrapper, Button } from './FeedbackOptions.styled';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;

  return (
    <Wrapper>
      {options.map(item => {
        return (
          <Button
            type="button"
            onClick={onLeaveFeedback}
            value={item}
            key={item}
          >
            {item}
          </Button>
        );
      })}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
