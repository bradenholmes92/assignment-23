import $ from 'jquery';
import React from "react";
import ReactDOM from "react-dom";

const ProfileList = React.createClass({
 _mapOverCongress: function(){

   return this.props.congressProp.map(function(obj){
     console.log(obj)
     return <SingleProfile singleCongress={obj}/>
   })
 },
render: function(){
  console.log(this.props.congressProp)
  return(
    <div>
      {this._mapOverCongress()}
    </div>
  )
}

})

const SingleProfile = React.createClass({


  render: function(){
    let congressPerson = this.props.singleCongress
    return(
      <div className="columns-container">
        <h4>{congressPerson.first_name} {congressPerson.last_name}</h4>
        <h5>{congressPerson.title} -- {congressPerson.party}-{congressPerson.state}</h5>
        <ul>
          <li> email: {congressPerson.oc_email}</li>
          <li> website: {congressPerson.website}</li>
          <li> facebook: {congressPerson.facebook_id}</li>
          <li> twitter: {congressPerson.twitter_id}</li>
        </ul>
        <h6>Term End{congressPerson.term_end}</h6>
      </div>
    )
  }


})

$.getJSON("https://congress.api.sunlightfoundation.com/legislators?callback=?").then(function(serverRes){
  ReactDOM.render(<ProfileList congressProp ={serverRes.results}/>, document.querySelector('#app-container'));
})
