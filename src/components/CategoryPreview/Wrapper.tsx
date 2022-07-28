import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;

	.title {
		font-size: 28px;
		margin-bottom: 25px;
		cursor: pointer;
	}

	.products {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 20px;
		row-gap: 50px;
	}
	@media screen and (max-width: 800px) {
		.products {
			grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		}
	}
`;

export default Wrapper;
