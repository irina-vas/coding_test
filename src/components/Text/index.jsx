import { createElement } from 'react';
import cx from 'classnames';

export const Text = ({ children, tag, weight, fontSize, textColor, ...rest }) => {
  const props = {
    className: cx('text',
      {[weight]: weight},
      {[fontSize]: fontSize},
      {[textColor]: textColor},
    ),
    ...rest
  };
    return createElement(tag, props, children);
}
