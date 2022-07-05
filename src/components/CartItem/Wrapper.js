import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	height: 110px;
	margin-bottom: 15px;
	justify-content: center;
	align-items: center;

	img {
		width: 30%;
		height: 100%;
		object-fit: cover;
	}

	.item-details {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 10px 20px;
		padding-top: 0;
		padding-bottom: 0;
		gap: 10px;
		justify-content: center;
		.name {
			font-size: 16px;
		}
	}
	.delete-btn {
		display: block;
		cursor: pointer;
	}
`;

export default Wrapper;
