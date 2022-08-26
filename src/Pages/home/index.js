import { Component } from "react";
import axios from "axios";
import Card from "./card";
import "./home.scss";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isModalOpen: false,
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

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { data = {}, isModalOpen } = this.state;
    const dataLength = Object.keys(data).length;

    return (
      <div className={`home ${isModalOpen ? "disable-scroll" : ""}`}>
        <div className="card-container">
          {dataLength > 0 &&
            data?.map((cardData, index) => {
              return (
                <div className="author-work" key={cardData.id}>
                  <Card cardData={cardData} isCard={true} addHover={index === dataLength - 1} openModal={this.toggleModal} />
                </div>
              );
            })}
        </div>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <p className="close-icon" onClick={this.toggleModal}>
                  X
                </p>
              </div>
              <Card cardData={data[dataLength - 1]} isCard={false} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
