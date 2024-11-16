import React from "react";
import classes from './App.module.scss';
import { Link, Outlet } from "react-router-dom";
import AvatarPng from "@/assets/image.png"

export const App = () => {
	const [count, setCount] = React.useState(0);

	return (
		<>
		<Link to="/about">about</Link>
		<br />
		<Link to="/shop">shop</Link>
		<img src={AvatarPng} alt="" />
		<button className={classes.button} onClick={() => setCount(count + 1)}>Нажми на меня</button>
		<span>{count}</span>
		<Outlet/>
		</>
		
	);
};