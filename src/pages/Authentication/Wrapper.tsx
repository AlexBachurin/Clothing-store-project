import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	width: 90vw;
	max-width: 900px;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 auto;
	@media screen and (max-width: 800px) {
		padding: 0 20px;
		width: 100%;
		gap: 20px;
	}
`;

export default Wrapper;
