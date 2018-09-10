/**
 * Created by XINCONAN(xinconan@gmail.com).
 * 单纯的image标签，允许指定error图片和默认图片以及自定义class
 */
import React from 'react';
import PropTypes from 'prop-types';
class DiyImg extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      src:
        this.props.src ||
        this.props.defaultSrc ||
        this.props.errorSrc
    };
    this.handleError = this.handleError.bind(this);
  }
  componentDidUpdate() {
    this.setState({
      src:
        this.props.src ||
        this.props.defaultSrc ||
        this.props.errorSrc
    });
  }
  handleError() {
    // 优先使用错误图片，然后是默认图片
    const src = this.props.errorSrc || this.props.defaultSrc;
    this.refs.diyImg.src = src;
  }
  render() {
    return (
      <img
        src={this.state.src}
        ref="diyImg"
        className={this.props.className}
        onError={this.handleError}
      />
    );
  }
}

DiyImg.propTypes = {
  src: PropTypes.string,
  defaultSrc: PropTypes.string,
  errorSrc: PropTypes.string,
  className: PropTypes.string
};
module.exports = DiyImg;
