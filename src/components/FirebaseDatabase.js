import React, { Component } from "react";
import Firebase from "../util/config";
import 'firebase/database'

const db = Firebase.database().ref('events');

export default class FirebaseDatabase extends Component {
  componentDidMount() {
    db.once("value", snapshot => {
      const data = snapshot.val();
      console.log(data);
    });
  }

  render() {
    return <div></div>;
  }
}
