import styled from "styled-components";

const Wrapper = styled.div`
	.category-items-container {
		max-width: 90vw;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 20px;
		row-gap: 50px;
	}
	.category-title {
		text-align: center;
		text-transform: uppercase;
		font-size: 30px;
	}
`;

export default Wrapper;
