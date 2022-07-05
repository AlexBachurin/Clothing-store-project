import styled from "styled-components";

const Wrapper = styled.div`
	width: 90vw;
	margin: 0 auto;
	max-width: 640px;
	display: grid;
	place-items: center;
	padding-top: 240px;
	.error-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
`;

export default Wrapper;
