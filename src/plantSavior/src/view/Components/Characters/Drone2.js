import React, { Component } from 'react';
import Sprite from './Sprite';
import { observer } from 'mobx-react';
import img from '../../../assets/sprites/drone2.png';
import waterIcon from '../../../assets/images/water-icon.png';
import pesticideIcon from '../../../assets/images/pesticide.png';
import Store from '../../../store';

class Drone2 extends Component {
  getAnimationState() {
    switch (this.props.direction) {
      case 'up':
        this.animState = 0;
        break;
      case 'down':
        this.animState = 2;
        break;
      case 'left':
        this.animState = 3;
        break;
      case 'right':
        this.animState = 1;
        break;
      default:
        this.animState = 1;
        break;
    }
  }
  getWrapperStyles() {
    this.getAnimationState();
    var targetX = this.props.position.x*this.props.scale;
    var targetY = this.props.position.y*this.props.scale;
    return {
      position: 'absolute',
      transform: `translate(${targetX}px, ${targetY}px)`,
      transformOrigin: 'left top',
      width: '64px',
      height: '64px'
    };
  }
  render() {
    return (
      <div id={'character'} style={this.getWrapperStyles()}>
        <div
          style={{
            marginTop:-this.props.size/2*this.props.scale+"px",
            marginLeft:this.props.size/4*this.props.scale+"px",
            width:this.props.size/2*this.props.scale+"px",
            height:this.props.size/2*this.props.scale+"px",
          }}
        > 
          {Store.filled[this.props.gameId][this.props.charId]=="water"&&
            <img src={waterIcon} style={{width:"100%", height:"100%"}}/>
          }
          {Store.filled[this.props.gameId][this.props.charId]=="pests"&&
            <img src={pesticideIcon} style={{width:"100%", height:"100%"}}/>
          }
        </div>
        <Sprite
          repeat={true}
          tileWidth={224}
          tileHeight={224}
          src={img}
          ticksPerFrame={4}
          state={this.animState}
          scale={(this.props.size/224)*this.props.scale}
          steps={[0, 0, 0, 0]}
        />
      </div>
    );
  }
}
export default observer(Drone2);