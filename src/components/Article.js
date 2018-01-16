import React, {Component} from 'react';

import Comments from './Comments';

export default class Article extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpenText: false,
            isOpenTextIcon:"icon ion-chevron-right",
            isOpenComment: false
        }
        this.handleClickTextButton = this.handleClickTextButton.bind(this);
        this.handleClickCommentButton = this.handleClickCommentButton.bind(this);
    }
    handleClickTextButton(){
        let tmp = (this.state.isOpenText === false)?true:false;
        let i = (this.state.isOpenText === false)?"ion-chevron-down":"icon ion-chevron-right";
        this.setState({
            isOpenText:tmp,
            isOpenTextIcon:i
        });
    }
    handleClickCommentButton(){
        let tmp = (this.state.isOpenComment === false)?true:false;
        this.setState({
            isOpenComment : tmp
        });
    }
    render() {
        const {article} = this.props;
        const body = this.state.isOpenText && <section className="Content">{article.text}</section>;
        const comments = article.comments;
        const commentElement = this.state.isOpenComment && comments && comments.map(function(item,index){
            return(
                <div key ={item.id}>
                    <Comments comment={item} />
                </div>
            );
        });
    
        return (
            <div className="Article">
                <h2 className="titleArticle">
                    {article.title}
                </h2>
                <button onClick={this.handleClickTextButton}>
                    <i className={this.state.isOpenTextIcon}></i> {this.state.isOpenText ? 'Скрыть' : 'Просмотреть'}
                </button>
                {body}
                <h3 className="dateArticle">
                    creation date: {(new Date(article.date)).toDateString()}
                </h3>
                {comments ? (
                    <button onClick={this.handleClickCommentButton}>
                        <i className="icon ion-chatboxes"></i> {this.state.isOpenComment ? 'Скрыть комментарии' : 'Смотреть комментарии'}
                    </button>
                ) : (
                    <p>Комментариев к этому посту еще нет</p>
                )}
                {commentElement}
            </div>
        )
    }
}
