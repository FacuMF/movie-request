import React from "react";
import SearchForm from "./SearchForm";

import "../App.css";
import ContentView from "./ContentView";

const HEADER = "https://api.themoviedb.org/3/";
const API_KEY = "c017afb6d9dc9d5477253597b72c8924";

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingMovies: [],
            trendingSeries: [],
            bestSeries: [],
            bestMovies: [],
            contentSearched: [],
            numPage: 1,
            queryText: "",
        };
    }

    componentDidMount() {
        this.fetchTrending();
        this.fetchBest();
    }

    async fetchTrending() {
        let url = `${HEADER}trending/movie/week?api_key=${API_KEY}`;
        let response = await fetch(url);
        let data = await response.json();

        const trendingMovies = [...data.results];

        url = `${HEADER}trending/tv/week?api_key=${API_KEY}`;
        response = await fetch(url);
        data = await response.json();

        const trendingSeries = [...data.results];

        this.setState({
            trendingMovies: trendingMovies,
            trendingSeries: trendingSeries,
        });
    }

    async fetchBest() {
        let url = `${HEADER}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_year=2020`;
        let response = await fetch(url);
        let data = await response.json();

        const bestMovies = [...data.results];

        url = `${HEADER}discover/tv?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_year=2020`;
        response = await fetch(url);
        data = await response.json();

        const bestSeries = [...data.results];

        this.setState({
            bestSeries: bestSeries,
            bestMovies: bestMovies,
        });
    }

    searchContent = async(text, numPage) => {
        const tipo = this.props.categoria === "peliculas" ? "movie" : "tv";
        const url = `${HEADER}search/${tipo}?api_key=${API_KEY}&language=en-US&query=${text}&page=${numPage.toString()}&include_adult=false`;
        const response = await fetch(url);
        const data = await response.json();

        let contenidoAAgregar = [...this.state.contentSearched];
        if (numPage == 1) {
            contenidoAAgregar = [];
        }

        this.setState({
            contentSearched: [...contenidoAAgregar, ...data.results],
            numPage: numPage + 1,
            queryText: text,
        });
        console.log(this.state.contentSearched.length);
        this.props.setSearchMode(true);
    };
    render() {
        const trendingContent = {
            content: this.props.categoria === "peliculas" ?
                this.state.trendingMovies :
                this.state.trendingSeries,
            categoria: this.props.categoria,
            title: this.props.categoria === "peliculas" ?
                "Trending movies" :
                "Trending series",
        };

        const bestContent = {
            content: this.props.categoria === "peliculas" ?
                this.state.bestMovies :
                this.state.bestSeries,
            categoria: this.props.categoria,
            title: this.props.categoria === "peliculas" ?
                "Best movies of 2020" :
                "Best series of 2020",
        };

        const searchResult = {
            content: this.state.contentSearched,
            categoria: this.props.categoria,
            title: `Resultados para: "${this.state.queryText}"`,
        };
        return ( 
            <div className = "content" >
            <SearchForm 
                categoria = { this.props.categoria }
                onSubmit = { this.searchContent }
            />
            {this.props.searchMode ? 
            (<div id="search-result">
                <ContentView content = { searchResult }/>
                <button 
                    id = "more-button"
                    onClick = {() => this.searchContent(this.state.queryText, this.state.numPage)} >
                    Mas 
                </button> 
            </div>
            ) : 
            (<div>
                <ContentView content = { trendingContent }/> 
                <ContentView content = { bestContent }/> 
            </div> 
)
            } 
            </div>
        );
    }
}

export default MainContent;