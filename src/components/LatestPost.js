import React from "react";
import Card from "./Card";
import './latestpost.css'

class LatestPost extends React.Component{
    data = [
        {
            id : 1,
            link : "All"
        },
        {
            id : 2,
            link : "Artificial Intelligence"
        },
        {
            id : 3,
            link : "cloud Computing"
        },
        {
            id : 4,
            link : "DevOps"
        },
        {
            id : 5,
            link : "Programming Languages"
        },
        {
            id : 6,
            link : "Mobile Application Development"
        },
        {
            id : 7,
            link : "Technology Tools"
        },
        {
            id : 8,
            link : "Get a Job in a Tech Company"
        },
        {
            id : 9,
            link : "Others"
        }
    ];

    cardData = [
        {
            id : 1,
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
            title : "Fresh Graduate or IT Professional",
            name : "Ram Kumar",
            date : "05 jul 2022",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus tenetur facere hic totam accusantium animi id culpa sit distinctio eum."
        },
        {
            id : 2,
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg",
            title : "Fresh Graduate or IT Professional",
            name : "Ram Kumar",
            date : "05 jul 2022",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus tenetur facere hic totam accusantium animi id culpa sit distinctio eum."
        },

        {
            id : 3,
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg",
            title : "Fresh Graduate or IT Professional",
            name : "Ram Kumar",
            date : "05 jul 2022",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus tenetur facere hic totam accusantium animi id culpa sit distinctio eum."
        },
        {
            id : 4,
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg",
            title : "Fresh Graduate or IT Professional",
            name : "Ram Kumar",
            date : "05 jul 2022",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus tenetur facere hic totam accusantium animi id culpa sit distinctio eum."
        },
        {
            id : 5,
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg",
            title : "Fresh Graduate or IT Professional",
            name : "Ram Kumar",
            date : "05 jul 2022",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus tenetur facere hic totam accusantium animi id culpa sit distinctio eum."
        },
        {
            id : 6,
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg",
            title : "Fresh Graduate or IT Professional",
            name : "Ram Kumar",
            date : "05 jul 2022",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus tenetur facere hic totam accusantium animi id culpa sit distinctio eum."
        },
        {
            id : 7,
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/cyber-security-analysis-of-digital-world.jpg",
            title : "Fresh Graduate or IT Professional",
            name : "Ram Kumar",
            date : "05 jul 2022",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus tenetur facere hic totam accusantium animi id culpa sit distinctio eum."
        }
    ];
    render(){
        return(
            <section>
                <h1> Latest Posts </h1>
                <span><i className="fa-solid fa-filter"></i> Filter by Category</span>
                <div className="data">
                    {
                        this.data.map((item,i)=>{
                            return <a href="/" key={i}> {item.link} </a>
                        })
                    }
                </div>
                    <div className="card-wrapper">
                        {
                            this.cardData.map((item,i)=>(
                                <Card 
                                    key={i}
                                    url = {item.url}
                                    title = {item.title}
                                    date = {item.date}
                                    name = {item.name}
                                    description = {item.description}
                                />
                            ))
                        }
                    </div>
            </section>
        )
    }
}

export default LatestPost;