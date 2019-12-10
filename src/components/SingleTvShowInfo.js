import React, { Component } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

class SingleTvShowInfo extends Component {
    constructor(){
        super();
        this.state = {
            tvShow: [],
            imageUrl: "",
            network: "",
            time: "",
            summary: "",
            image: ""
        }
    }

    componentDidMount(){
            axios({
                url: `https://api.tvmaze.com/shows/${this.props.match.params.id}`,
                method: 'GET',
                "async": true,
                "crossDomain": true,
                dataType: 'json',
            }).then((response) => {
                console.log(response.data);

                this.setState({
                    tvShow: response.data,
                    imageUrl: response.data.image.original,
                    network: response.data.network.name,
                    time: response.data.schedule.time,
                    summary: response.data.summary,
                    genre: response.data.genres.join(", "),
                    imdb: `https://www.imdb.com/title/${response.data.externals.imdb}`,
                })

                this.setState({
                    image: this.state.imageUrl.replace(/^http:\/\//i, 'https://')
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
                <div className="tvShowPhoto">
                    <img src={this.state.image} alt={this.state.tvShow.name} />
                </div>
                <div className="tvShowDescription">
                    <h2>{this.state.tvShow.name}</h2>

                    <p>Genres: {this.state.genre}</p>
                    <p>Network Name: {this.state.network}</p>
                    <p>Time: {this.state.time}</p>
                    <p>{removeTags(this.state.summary)}</p>
                    <a href={this.state.imdb}>Go to Imdb</a>

                    <h3><Link to="/"> Return to main page </Link></h3>

                </div>
            </div>
        )
    }
}

export default SingleTvShowInfo;