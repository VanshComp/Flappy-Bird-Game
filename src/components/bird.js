// Bird.js
import React from "react";

const Bird = ({ birdPosition }) => {

	return (
		<img
			src={"https://media.geeksforgeeks.org/wp-content/uploads/20231211115925/flappy_bird_by_jubaaj_d93bpnj.gif"}
			alt="bird"
			className="bird"
			style={{
				left: birdPosition.x,
				top: birdPosition.y,
			}}
			draggable={true}
		/>
	);
};

export default Bird;
