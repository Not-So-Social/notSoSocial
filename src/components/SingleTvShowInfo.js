import React, { Component } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

class SingleTvShowInfo extends Component {
    constructor(){
        super();
        this.state = {
            tvShow: [],
            image: "",
            network: "",
            time: ""
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
                    tvShow: response.data
                })

                this.setState({
                    image: this.state.tvShow.image.original
                })

                this.setState({
                    network: this.state.tvShow.network.name
                })

                this.setState({
                    time: this.state.tvShow.schedule.time
                })

                this.setState({
                    summary: this.state.tvShow.summary
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

    removeTags = () => {
        parseArray = [...this.state.tvShow.summary];
        newArray = [];
        newString = "";
        inProcess = false;

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

    

    render(){

        // console.log(this.state.tvShow.image)
        return(
            <div>
                <h2>{this.state.tvShow.name}</h2>
                <img src={this.state.image} alt="sorted tv show results" />
                {/* <a href={this.state.tvShow.imdb}>Go to Imdb</a> */}
                <p>Genres: {this.state.tvShow.genres}</p>
                <p>Network Name: {this.state.network}</p>
                <p>Time: {this.state.time}</p>
                <p>{this.removeTags(this.state.tvShow.summary)}</p>
            </div>
        )
    }
}

export default SingleTvShowInfo;