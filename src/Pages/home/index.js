import { Component } from "react";
import axios from "axios";
import "./home.scss";

const Card = ({ cardData, isModal, isHover }) => {
  // const enableHover = index === dataLength - 1;
  // let isHover = false;

  // const onHover = () => {
  //   isHover = !isHover;
  //   console.log(isHover);
  // };
  // console.log(enableHover, isHover);
  return (
    <div className="content-card">
      <img
        className="content-img"
        // onMouseEnter={() => {
        //   if (enableHover) onHover();
        // }}
        // onMouseLeave={() => {
        //   if (enableHover) onHover();
        // }}
        src={cardData.thumbnail.small}
        alt={cardData.title}
      />
      {/* {isHover && (
        <div>
          <p>sjiasiajisj</p>
          <p>Learn More</p>
        </div>
      )} */}
      <div className="content-details">
        {!isModal && (
          <div className="border">
            <p className="circle red"></p>
            <p className="circle blue"></p>
          </div>
        )}
        <p className="title">{cardData.title}</p>
        <p className="content">{cardData.content}</p>
        {isModal ? (
          <div></div>
        ) : (
          <div className="author-details">
            <p className="author-role">
              {cardData.author.name} - {cardData.author.role}
            </p>
            <p>{new Date(cardData.date).toDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isModalOpen: false,
      isHover: false,
    };
  }

  componentDidMount() {
    axios
      .get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onHover = () => {
    const { isHover } = this.state;
    this.setState({ isHover: !isHover });
  };

  render() {
    const { data = {}, isModalOpen } = this.state;

    return (
      <div className="home">
        {Object.keys(data).length > 0 &&
          data?.map((cardData, index) => {
            return (
              <div className="author-work" key={data.id}>
                <Card cardData={cardData} isModal={isModalOpen} enableHover={index === Object.keys(data).length - 1} />
              </div>
            );
          })}
      </div>
    );
  }
}

export default Home;
