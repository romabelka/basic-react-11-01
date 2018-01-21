import React, { Component } from 'react'
import Article from './Article'

//import accordion from '../decorators/accordion' // decorator


// class ArticleList extends Component {
//     state = {
//         error: null
//     }

//     componentDidCatch(error) {
//         console.log('---', 123, error)
//         this.setState({ error })
//     }

//     render() {
//         if (this.state.error) return <h2>Some error</h2>
     
//         const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
//             <Article article = {article}
//                      defaultOpen = {index === 0}
//                      isOpen = {article.id === this.props.openArticleId}
//                      onButtonClick = {this.props.toggleOpenArticle}
//             />
//         </li>)



//         return (
//             <ul>
//                 {articleElements}
//             </ul>
//         )
//     }



    
        
// }

// export default accordion(ArticleList)

// decorator task end 


import Accordion from './Accordion'


class ArticleList extends Accordion {
    state = {
        error: null
    }

    componentDidCatch(error) {
        console.log('---', 123, error)
        this.setState({ error })
    }

    render() {
        console.log("asdada")
        if (this.state.error) return <h2>Some error</h2>
     
        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     defaultOpen = {index === 0}
                     isOpen = {article.id === this.state.openArticleId}
                     onButtonClick = {this.toggleOpenArticle}
            />
        </li>)



        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

    export default ArticleList