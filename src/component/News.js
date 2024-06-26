import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'


export default class News extends Component {

  static defaultProps = {
    country: 'in',
    page:8,
    category: "genral"
  }
  static proptype = {
    country: PropTypes.string,
    page: PropTypes.number,
    category: PropTypes.string
  }
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page:1
        }

    }
    async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e554aff1b0b34331b57b03496018d7ca&page=1&pagesize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data= await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData)
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
    }
    handleNextClick=async()=>{
      if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e554aff1b0b34331b57b03496018d7ca&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data= await fetch(url);
        let parsedData = await data.json()
        console.log("next")
        this.setState({
          page: this.state.page+1,
          articles: parsedData.articles,
          loading: false
        })
      }
    }
    handlePrevClick=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e554aff1b0b34331b57b03496018d7ca&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data= await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData)
      this.setState({articles: parsedData.articles})
      console.log("prev")
      this.setState({
        page: this.state.page-1,
        loading: false
      })

    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{margin: '35px'}}>News Monkey Top headline</h1>
                {this.state.loading && <Spiner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0, 45):""} discription={element.description?element.description.slice(0,45):""} imgurl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                  <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePrevClick}>&larr; Previous</button>
                  <button disabled={(this.state.page+1)>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextClick}> Next &rarr;</button>
                </div>
            </div>
        )
    }
}
