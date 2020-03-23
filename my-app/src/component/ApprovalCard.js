import React from 'react';

const ApprovalCard = props => {
  console.log(props.children);
  return(
    <div class="ui card">
        <div class="content">{props.children}</div>
        <div class="extra content">
          <p>Like</p>
          <p>comments</p>
        </div>
      </div>
  );
};
 export default ApprovalCard;