import React from 'react';

class Detail extends React.Component {
    componentDidMount(){
        const { location, history } = this.props;
        //location.state가 없는 경우
        if (location.state === undefined){
            history.push('/'); //Home으로 이동시킴
        }
    }

    render(){
        const { location } = this.props;
        if (location.state){
            return <span>{location.state.title}</span>;
        } else{
            return null;
        }
    }
}

export default Detail;

//Movie 컴포넌트로부터 전달받은 영화 데이터 ~> location.state