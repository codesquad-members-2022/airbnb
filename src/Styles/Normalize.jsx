import { createGlobalStyle, css } from "styled-components";

const Normalize = createGlobalStyle`
	${({ theme: { colors, fontMain } }) => css`
		#modal {
			${fontMain};
			color: ${colors.black};
		}
		.App {
			${fontMain};
			color: ${colors.black};
			width: 100vw;
			height: 100vh;
			div {
				box-sizing: border-box;
			}
		}
	`}

	@keyframes fade-in {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}

	@keyframes fade-out {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	@keyframes slide-prev {
		from {
			transform: translateX(-800px);
		}
		to {
			transform: translateX(0px);
		}
	}

	@keyframes slide-next {
		from {
			transform: translateX(0px);
		}
		to {
			transform: translateX(-800px);
		}
	}
`;

export default Normalize;
