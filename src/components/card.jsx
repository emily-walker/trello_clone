import React from 'react';

const Card = React.createClass({

  render: function () {
    console.log(this.props.cards);
    return (
      <div>
        {this.props.cards.map((card, index) => {
          return (
            <div className="list-card">
              <div className="list-card-details">
                  <a className="list-card-title">
                    {card.title}
                    </a>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

});

export default Card;