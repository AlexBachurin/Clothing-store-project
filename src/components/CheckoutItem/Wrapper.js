import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;

	.image-container {
		width: 23%;
		padding-right: 15px;

		img {
			width: 100%;
			height: 100%;
		}
	}
	.name,
	.amount,
	.price {
		width: 23%;
	}

	.amount {
		display: flex;

		.arrow {
			cursor: pointer;
			user-select: none;
		}

		&-value {
			margin: 0 10px;
		}
	}

	.remove-button {
		padding-left: 12px;
		cursor: pointer;
	}
`;

export default Wrapper;
