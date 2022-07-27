import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 450px;
	h2 {
		margin: 10px 0;
	}
	.btn-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
	}
`;

export default Wrapper;
