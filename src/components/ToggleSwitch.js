import React from "react";


const ToggleSwitch = ({ label }) => {
return (
	<div className="d-flex align-items-baseline">
	
	<div className="toggle-switch">
		 <input type="checkbox" className="checkbox"
			name={label} id={label} />
		<label className="label" htmlFor={label}>
		<span className="inner" />
       
		<span className="switch" /> 
		</label>
	</div>
    <p className="m-3 fw">1 Click Betting
    </p>
	</div>
);
};

export default ToggleSwitch;
