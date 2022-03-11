import React from "react";

/*
function Fruit(props) {
  console.log(props);
	return <h3>{props.fav}맛있다</h3>;
}
*/

function Fruit({fav}){
  return <h1>{fav}맛있다</h1>
}

function App() {
	return (
		<div>
			<h1>안녕하세요</h1>
			<Fruit fav="바나나"></Fruit>
			<Fruit fav="딸기"></Fruit>
			<Fruit fav="복숭아"></Fruit>
			<Fruit fav="파인애플"></Fruit>
		</div>
	);
}
export default App;
