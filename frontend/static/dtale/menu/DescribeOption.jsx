import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

import { MenuItem } from './MenuItem';

class DescribeOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MenuItem description={this.props.t('menu_description:describe')} onClick={this.props.open}>
        <span className="toggler-action">
          <button className="btn btn-plain">
            <i className="ico-view-column" />
            <span className="font-weight-bold">{this.props.t('Describe', { ns: 'menu' })}</span>
          </button>
        </span>
      </MenuItem>
    );
  }
}
DescribeOption.displayName = 'DescribeOption';
DescribeOption.propTypes = {
  open: PropTypes.func,
  t: PropTypes.func,
};

export default withTranslation(['menu', 'menu_description'])(DescribeOption);