//import = ES2015 modules, require = CommonJS modules
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//React Component
const App = () => {
    return (
        <div className="io container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blog post!" />
            </ApprovalCard>
            <CommentDetail author="Alex" timeAgo="Today at 2:13AM" content="Hi!" />
            <CommentDetail author="Jane" timeAgo="Yesterday at 14:17PM" content="..." />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
