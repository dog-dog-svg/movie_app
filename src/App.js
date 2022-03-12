import React from "react";
import PropTypes from "prop-types";

function Fruit({ name, picture, rating }) {
	return (
		<div>
			<h1>{name}맛있다</h1>
			<div>별점:{rating}</div>
			<img src={picture} alt={name} />
		</div>
	);
}

const fruitILike = [
	{
		id: 1,
		name: "banana",
		image: "http://qwerew.cafe24.com/images/banana.png",
		rating: 5,
	},
	{
		id: 2,
		name: "orange",
		image: "http://qwerew.cafe24.com/images/orange.png",
		rating: 4.5,
	},
	{
		id: 3,
		name: "apple",
		image: "http://qwerew.cafe24.com/images/apple.png",
		rating: 1.9,
	},
	{
		id: 4,
		name: "melon",
		image: "http://qwerew.cafe24.com/images/melon.jpg",
		rating: 3.8,
	},
];

function App() {
	return (
		<div>
			{fruitILike.map((dish) => (
				<Fruit key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
			))}
		</div>
	);
}

Fruit.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
};
export default App;
