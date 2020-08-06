import React, { Component } from "react";
import "./conferencedocdetail.style.css";
import download_off from "../../../../assets/doc/download_off.png";
import PDF from "./PDF";
import * as services from "../../../../services/DocumentService";
import moment from "moment";

class ConferenceDocDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: [],
      key: [],
      keyword: [],
      contents: [],
    };
  }

  render() {
    const { detail } = this.state;
    const startTime = new Date(detail.startTime);
    const endTime = new Date(detail.endTime);

    return (
      <div className="documentdetaildiv">
        <div className="documentDetailTitle">
          <div className="Title1">{detail.title}</div>

          <div className="Title2">
            {moment(startTime).format("YYYY.MM.DD") +
              " " +
              moment(startTime).format("HH:mm") +
              " ~ " +
              moment(endTime).format("YYYY.MM.DD") +
              " " +
              moment(endTime).format("HH:mm")}
          </div>

          <div className="save_button_div">
            <button className="save_button">
              <img src={download_off} className="downloadimg" />
              전체본
            </button>
          </div>
        </div>
        <PDF
          id={"한이음 2019 공모전 회의2"}
          keywords={detail.keywords}
          detail={detail.contents}
        />
      </div>
    );
  }
}

export default ConferenceDocDetail;
