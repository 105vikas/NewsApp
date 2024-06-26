import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, discription, imgurl, newsUrl, author, date ,source} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ zIndex:'1'}}> {/*style=left: '90%x',*/}
                            {source}
                        </span> 
                    <img src={imgurl ? imgurl : "https://www.hindustantimes.com/ht-img/img/2024/06/21/1600x900/job_interview_1718958514175_1718958530688.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        
                        <p className="card-text">{discription}...</p>
                        <p className="cardtime">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</p>
                        <a href={newsUrl} rel="noopener noreferrer" className="btn btn-sm btn-primary bg-dark" target='_blank'>Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
