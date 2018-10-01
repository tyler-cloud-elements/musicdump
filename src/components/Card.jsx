import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid darkgray;
  height: 260px;
  width: 260px;
  padding: 5px;
  margin: 10px;
`;

class Card extends Component {
  render() {
    const { title, url, playing, loop, volume, controls, muted, width, height } = this.props;
    return (
      <CardWrapper>
        <h3>{title}</h3>
        <ReactPlayer
          url={url}
          playing={playing}
          loop={loop}
          controls={controls}
          volume={volume}
          muted={muted}
          width={width}
          height={height}
        />
      </CardWrapper>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  playing: PropTypes.bool,
  controls: PropTypes.bool,
  volume: PropTypes.number,
  muted: PropTypes.bool,
  width: PropTypes.any,
  height: PropTypes.any,
}

Card.defaultProps = {
  playing: false,
  controls: true,
  volume: 1,
  muted: false,
  width: 240,
  height: 200
}

export default Card;
