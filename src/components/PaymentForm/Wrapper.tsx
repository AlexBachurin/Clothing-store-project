import styled from "styled-components";

const Wrapper = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.payment-form {
		min-height: 300px;
		/* min-width: 500px; */
		/* display: flex;
		flex-direction: column;
		align-items: center; */
		text-align: center;
	}
	.message {
		color: pink;
		margin-bottom: 30px;
		span {
			color: black;
		}
	}
	.payment-btn {
		margin: 0 auto;
		margin-top: 40px;
	}
	@media screen and (max-width: 800px) {
		width: 100%;
		margin: 0 auto;
		.payment-form {
			width: 100%;
		}
	}
`;

export default Wrapper;
