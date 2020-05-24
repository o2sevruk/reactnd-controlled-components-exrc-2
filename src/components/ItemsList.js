import React, {Component, Fragment} from 'react';

class ItemsList extends Component {
  render() {
    const {items} = this.props;
    
    return(
      <Fragment>
        <p className="items">Items</p>

        <ol className="item-list">
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </Fragment>
    )
  }
}

export default ItemsList;