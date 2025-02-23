import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root{
    --yellow: #FABB18;
    --dark: #000000;

    --red: #E52E4D;
    --green: #33CC95;

    --dark-text: #000000;
    --light-text: #969CB3;

    --light-border: #e4e4e4;

    --background: #F0F2F5;  
    --white: #FFFFFF;
}

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

html{ 
    @media (max-width: 1080px) {
        font-size: 93.75%; // 15px (Desktop)
    }

    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
}

body, button, input, textarea{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

body {
    background: var(--background)
}

button { 
    cursor: pointer;
    outline: 0;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

a {
    transition: color 0.2s;
    &:hover{
        color: var(--yellow) !important;
    }
}

input, textarea {
    resize: none;

	min-height: 3.5rem;
	font-size: 1rem;

	margin: 0.5rem 0;
	padding: 0.5rem 1rem;

	color: var(--dark-text);
	background: var(--white);

	border: 0.125rem solid var(--light-border);
	border-radius: 0.3rem;
    outline: 0;

    &:focus{
        border-color: var(--dark)
    }

}

button {
	height: 3.5rem;
	font-size: 1.5rem;
	font-weight: 600;

	margin: 1rem 0 0;
	padding: 0.3rem 1rem;

	color: var(--dark-text);
	background: var(--yellow);

	border: none;
	border-radius: 0.3rem;

	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.8);
	}
}

.react-modal-overlay{
    overflow: auto;
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}
.react-modal-content{
    width: 95%;
    max-width: 500px;

    background: var(--background);

    position: relative;
    border-radius: 0.5rem;
}

.react-modal-close{
    position: absolute;

    height: 1rem;

    right: 0.5rem;
    top: 0.5rem;

    border: 0;

    margin: 0;
    padding: 0;

    background: transparent;
    color: var(--white);

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.8)   
    }
}

.ReactModal__Body--open {
  overflow-y: hidden;
}

*::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
}
*::-webkit-scrollbar-thumb {
    background-color: #000000;
}
*::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
    background-color: #F5F5F5;
}

`;
