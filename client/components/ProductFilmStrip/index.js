import React from 'react';

export default class Filmstrip extends React.Component {

  constructor(props) {
    super(props)
    this.state = { scrollPos: 0 }
    this.increment = parseInt(this.props.increment, 10)
  }

  adjustPos(increment) {
    this.innerwidth = this.refs.strip.getBoundingClientRect().width
    this.viewportwidth = this.refs.viewport.getBoundingClientRect().width

    var newPos = this.state.scrollPos + increment;
    var offset = this.viewportwidth - this.innerwidth

    if (increment > 0)
      newPos = Math.min(newPos, 0)

    if (increment < 0)
      newPos = Math.max(newPos, offset)

    this.setState({ scrollPos: newPos })
  }

  componentDidMount() {
    this.refs.filmstrip.style.height = this.refs.strip.getBoundingClientRect().height + 'px'
  }

  render() {
    const alternateImages = this.props.images.AlternateImages;
    const stripItem = alternateImages.map((item, index) => {
      return (
        <div key={index} className='strip-item'><img src={item.image} /></div>
      );
    });
    return (
      <section className="filmstrip image-container" ref='filmstrip'>
        <button className="prevNav navButton" onClick={this.adjustPos.bind(this, this.increment)}>&lt;</button>
        <div className="viewport" ref='viewport'>
          <div className='strip' ref='strip' style={{ left: this.state.scrollPos }}>
            {stripItem}
          </div>
        </div>
      <button className='nextNav navButton' onClick={this.adjustPos.bind(this, -this.increment)}>&gt;</button>
    </section>
    )
  }
}
