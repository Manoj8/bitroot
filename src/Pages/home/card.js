import React from "react";

class Card extends React.Component {
  render() {
    const { cardData, isCard, addHover, openModal } = this.props;
    return (
      <div className={`${isCard ? "content-card" : ""}`}>
        <div className={`${addHover ? "img-container" : ""}`}>
          <img className="content-img" src={cardData.thumbnail.large} alt={cardData.title} />
          {addHover && (
            <div className="learn-more" onClick={openModal}>
              Learn More
            </div>
          )}
        </div>

        <div className="content-details">
          {isCard && (
            <div className="border">
              <p className="circle red"></p>
              <p className="circle blue"></p>
            </div>
          )}
          <p className="title">{cardData.title}</p>
          <p className="content">{cardData.content}</p>
          {isCard ? (
            <div className="author-details">
              <p className="author-role">
                {cardData.author.name} - {cardData.author.role}
              </p>
              <p>{new Date(cardData.date).toDateString()}</p>
            </div>
          ) : (
            <div className="author">
              <img className="author-img" src={cardData.author.avatar} alt={cardData.author.name} />
              <p className="author-role">
                {cardData.author.name} - {cardData.author.role}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
