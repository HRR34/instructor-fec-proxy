import React from 'react';
import { Collapse, Well, Button } from 'react-bootstrap';

class Instructor extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showText: false
    }
  }
  render() {
    return (
      <div id="instructor">
        <div className="header">About the Instructor</div>
        <div className="avatarBox">
          <img className="avatar" src={this.props.instructor.imageUrl}></img>
          <div className="rating">
            <img className="Icon" src={this.props.instructor.ratingIcon}></img>
            <span className="number">{this.props.instructor.rating}</span> Instructor Rating
          </div>
          <div className="reviews">
            <img className="Icon" src={this.props.instructor.reviewsIcon}></img>
            <span className="number">{this.props.instructor.reviews}</span> Reviews
          </div>
          <div className="students">
            <img className="Icon" src={this.props.instructor.studentsIcon}></img>
            <span className="number">{this.props.instructor.numOfStudents}</span> Students</div>
          <div className="courses">
            <img className="Icon" src={this.props.instructor.courseIcon}></img>
            <span className="number">{this.props.instructor.numOfCourses}</span> Courses</div>
        </div>

        <div className="descriptionBox">
          <div className="name">{this.props.instructor.name}</div>
          <div className="headline">{this.props.instructor.headline}</div>

            <div className="body">
            <p>{this.props.instructor.body}</p>
            {this.state.showText &&
            <Collapse in={this.state.showText}>
              <div>
                 <Well>
                   {this.props.instructor.body}
                   {this.props.instructor.body}
                 </Well>
              </div>
            </Collapse>
          }
          <a className="showMore" onClick={() => {
            this.setState({ showText: !this.state.showText })}
          }> + See more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructor;