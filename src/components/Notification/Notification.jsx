import PropTypes from 'prop-types';
import { Text } from './Notification.styled';

const Notification = props => {
  const { message } = props;

  return <Text>{message}</Text>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
