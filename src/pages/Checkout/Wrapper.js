import styled from "styled-components";

const Wrapper = styled.div`
	width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;

	.checkout-header {
		width: 100%;
		padding: 10px 0;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid darkgrey;

		.header-block {
			text-transform: capitalize;
			width: 23%;

			&:last-child {
				width: 8%;
			}
		}
	}
	.empty {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
		font-size: 20px;
		gap: 20px;
		text-transform: capitalize;
		&-message {
			font-weight: bold;
		}
		&-link {
			display: block;
			color: #4285f4;
			text-align: center;
		}
	}
	.total {
		margin-top: 30px;
		margin-left: auto;
		font-size: 36px;
	}
`;

export default Wrapper;
