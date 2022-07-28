import styled from "styled-components";

const Wrapper = styled.div`
	.navigation {
		height: 70px;
		width: 90vw;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 25px;

		.logo-container {
			/* height: 100%; */
			width: 70px;
			padding: 25px;
			display: grid;
			place-items: center;
		}

		.nav-links-container {
			width: 50%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;

			.nav-link {
				padding: 10px 15px;
				cursor: pointer;
			}
		}
	}
	@media screen and (max-width: 800px) {
		.navigation {
			height: 40px;
			.logo-container {
				padding: 0;
			}
			.nav-links-container {
				width: 70%;
				.nav-link {
					padding: 10px 5px;
				}
			}
		}
	}
`;

export default Wrapper;
