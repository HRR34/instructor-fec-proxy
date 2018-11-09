

import React from "react"
import ReactDOM from 'react-dom';
import $ from 'jquery';



class Entries extends React.Component {
  constructor ({entry}) {
    super()
    this.state = {
      entry :entry

    }
    // console.log("Entries", this.state.entry)

    this.setMinutes()
  }

  setMinutes() {
    let minutes = this.state.entry.duration
    let hours = Math.floor(minutes/60)
    minutes = minutes - hours*60
    // console.log(minutes)
    this.state.minutes = minutes < 10 ? "0"+minutes : "" + minutes;
    this.state.hours= "0" + hours


  }

  render () {

    return (
        <div className = "entry-course-items">
          <div className = "entry-image-div"> <img className = "entry-image" src = "https://s3.us-east-2.amazonaws.com/fec-team7-images/playbutton.png"/>
          </div>
            <div className = "entry-name"> {this.state.entry.name} </div>

          <div className = "entry-lecture-length"> {this.state.hours + ":" + this.state.minutes} </div>
        </div>



      )


  }



}

module.exports = Entries;