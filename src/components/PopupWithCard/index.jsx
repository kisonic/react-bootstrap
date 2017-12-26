import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Card from '../Card';
import Icon from '../Icon';
import Popup from '../Popup';

import colors from '../../utils/colors';

const PopupWithCard = ({
  color,
  title,
  controls,
  closeButtonTitle,
  onClose,
  children,
  ...props
}) => (
  <Popup closeButtonTitle={closeButtonTitle} onClose={onClose}>
    <Card
      color={color}
      title={title}
      collapsible={false}
      controls={
        title || controls ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
            }}
          >
            {controls}
            <Button
              color={color || 'light'}
              className='ml-3'
              onClick={onClose}
              title={closeButtonTitle}
            >
              <Icon name='close' />
            </Button>
          </div>
        ) : null
      }
      style={{ width: '550px' }}
      {...props}
    >
      {children}
    </Card>
  </Popup>
);

PopupWithCard.propTypes = {
  color: PropTypes.oneOf([...colors, '']),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  controls: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  closeButtonTitle: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

PopupWithCard.defaultProps = {
  color: '',
  title: null,
  controls: null,
  closeButtonTitle: 'Close',
  onClose: () => {},
  children: null,
};

export default PopupWithCard;