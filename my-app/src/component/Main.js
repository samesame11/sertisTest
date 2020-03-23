import React from 'react'
import Faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const Main = () => {
    return <div className="main-container">
        < div className = "ui container comments" >
        <ApprovalCard > 
        < CommentDetail 
        Topic = "PHYSICS"
        author = "Sam"
        TimeAgo = "Today at 4:45 PM"
        content = "Nice blog Post!"
        avatar = {
        Faker.image.avatar()
        }/></ApprovalCard >

        <ApprovalCard>
        <CommentDetail 
        Topic = "TECHNLOGY"
        author = 'Alex'
        TimeAgo = "Today at 2:00AM PM"
        content = "I like this Sub!"
        avatar = {
        Faker.image.avatar()
        }/>    
        </ApprovalCard >
        <ApprovalCard>
        <CommentDetail 
        Topic = "Socail"
        author = 'Jane'
        TimeAgo = "Yesterday at 6:00 PM"
        content = "I hate this person"
        avatar = {
        Faker.image.avatar()
        }/>     
        </ApprovalCard > 
        </div>
    </div>
}
export default Main