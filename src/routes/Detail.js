import React from "react";

class Detail extends React.Component {
	componentDidMount() {
		const { location, history } = this.props;
		if (location.state === undefined) {
			//location.state가 없는 경우
			history.push("/"); //Home로 이동시키겠다
		} else {
			return null;
		}
	}

	render() {
		const { location } = this.props;
		return <span>{location.state.title}</span>;
	}
}

export default Detail;
