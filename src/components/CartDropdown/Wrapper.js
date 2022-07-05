import styled from "styled-components";

const Wrapper = styled.div`
	position: absolute;
	width: 240px;
	height: auto;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

	.empty-message {
		font-size: 18px;
		margin: 50px auto;
	}

	.cart-items {
		height: 240px;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		overflow-x: hidden;
		scrollbar-color: #d4aa70 #e4e4e4;
		scrollbar-width: thin;
		padding-right: 10px;
		&::-webkit-scrollbar {
			width: 12px;
		}

		&::-webkit-scrollbar-track {
			background-color: #e4e4e4;
			border-radius: 100px;
		}

		&::-webkit-scrollbar-thumb {
			border-radius: 100px;
			border: 6px solid rgba(0, 0, 0, 0.18);
			border-left: 0;
			border-right: 0;
			background-color: #4d4d4d;
		}
	}

	button {
		margin-top: auto;
	}
`;

export default Wrapper;
