import React from 'react'
import { Muscles } from '../store'


const Footer = ({ handleChange }) => {

	return (
		<div className="fixed-bottom col-12">
		<ul className="nav nav-tabs bg-dark">
		{Muscles.map(muscle => (
		   <li className="nav-item" key={muscle}  onClick={handleChange}>
		    <a className="nav-link" data-id={muscle} href="#">{muscle}</a> 
		  </li>	
		))}

		</ul>
		</div>
		)

}

export default Footer