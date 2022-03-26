import React from 'react';
import Answer from './Answer/Answer';
import Question from './Question/Question';

const Questionwithans = (props) => {
    const [ques1, ques2] = props.questions;
    const [ans1, ans2, ans3] = props.answers;
    return (
        <div>
            <Question question={ques1}></Question>
            <Answer answer={ans1}></Answer>
            <br/>
            <Question question={ques2}></Question>
            <Answer answer={ans2}></Answer>
            <Answer answer={ans3}></Answer>
        </div>

    );
};

export default Questionwithans;