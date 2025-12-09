import React from "react";

//include images into your bundle
import { Navbar } from "./Navbar";
import { Cards } from "./Cards";
import { Presentation } from "./Presentation";


//create your first component
const Home = () => {
	const users = [
		{name : "Luis", age :32, work :"plomero"},
		{name : "Andres", age :35, work :"policia"},
		{name : "Maria", age :33, work :"corredora"},
		{name :"Carmen", age :34, work :"presidente"},
	];

	return (
	<>
		<Navbar />
		<Presentation />
		<div className='row'>
		{users.map((user, index)=>{
			return (<div key={index} className="col-12 col-md-6 col-lg-3">
			<Cards name={user.name} age={user.age} work={user.work} />
			</div>)
		})}
		</div>
	</>
	)
};

export default Home;