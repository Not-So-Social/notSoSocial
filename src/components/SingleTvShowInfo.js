import React, { Component } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

class SingleTvShowInfo extends Component {
    constructor(){
        super();
        this.state = {
            tvShow: [],
            image: "",
            network: "",
            time: "",
            summary: ""
        }
    }

    componentDidMount(){
            axios({
                url: `http://api.tvmaze.com/shows/${this.props.match.params.id}`,
                method: 'GET',
                "async": true,
                "crossDomain": true,
                dataType: 'json',
            }).then((response) => {
                console.log(response.data);

                this.setState({
                    tvShow: response.data,
                    image: response.data.image.original,
                    network: response.data.network.name,
                    time: response.data.schedule.time,
                    summary: response.data.summary,
                    genre: response.data.genres.join(", "),
                    imdb: `https://www.imdb.com/title/${response.data.externals.imdb}`
                })
        }).catch(() => {
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong!',
                icon: 'error',
                confirmButtonText: 'Cool'
            })        
        })

    }

    render(){

        const removeTags = (rawString) => {
            let parseArray = [...rawString];
            let newArray = [];
            let newString = "";
            let inProcess = false;

            parseArray.forEach((item) => {
                if (item === "<") {
                    inProcess = true;
                };

                if (!inProcess) {
                    newArray.push(item);
                };

                if (item === ">") {
                    inProcess = false;
                };
            });
            newArray.forEach((item) => {
                newString += item;
            });

            return (newString);
        }

        // console.log(this.state.tvShow.image)
        return(
            <div className="tvShowInfo">
                <div className="tvShowNameAndPhoto">
                    <h2>{this.state.tvShow.name}</h2>
                    <img src={this.state.image} alt={this.state.tvShow.name} />
                </div>
                <div className="tvShowDescription">
                    <h2><Link to="/"> Return to main page </Link></h2>
                    <a href={this.state.imdb}>Go to Imdb</a>
                    <p>Genres: {this.state.genre}</p>
                    <p>Network Name: {this.state.network}</p>
                    <p>Time: {this.state.time}</p>
                    <p>{removeTags(this.state.summary)}</p>
                </div>
            </div>
        )
    }
}

export default SingleTvShowInfo;