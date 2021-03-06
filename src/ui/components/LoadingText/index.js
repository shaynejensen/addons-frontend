/* @flow */
import makeClassName from 'classnames';
import * as React from 'react';

import './styles.scss';


type Props = {|
  className?: string,
  width?: number,
  minWidth: number,
  range: number,
|};

export default class LoadingText extends React.Component<Props> {
  static defaultProps = {
    minWidth: 20,
    range: 60,
  }

  render() {
    const { className, minWidth, range, width } = this.props;

    // We start each animation with a slightly different delay so content
    // doesn't appear to be pulsing all at once.
    const delayStart = Math.floor(Math.random() * 3) + 1;

    let finalWidth = width;
    if (typeof finalWidth === 'undefined') {
      // Allow a minimum width so placeholders appear approximately
      // the same size as content.
      finalWidth = Math.floor(Math.random() * range) + minWidth;
    }

    return (
      <span
        className={makeClassName(
          'LoadingText',
          `LoadingText--delay-${delayStart}`,
          className,
        )}
        style={{
          width: `${finalWidth}%`,
        }}
      />
    );
  }
}
