input[type=checkbox] {
	position: absolute;
	clip: rect(0, 0, 0, 0);
}
label {
	cursor: pointer;
}
label:after {
	content: ' ';
	display: inline-block;
	width: 17px;
	height: 17px;
	background: url(img/checkbox-2.png);
	position: relative;
	top: 3px;
	margin-left: 15px;
}

input[type=checkbox]:checked + label:after {
background-position: 0 -17px;
}
label:hover:after {
background-position: 0 -34px;
}
input[type=checkbox]:checked + label:hover:after {
background-position: 0 -51px;
}
