import { Category } from "@/app/utils/categories";

import { SearchButtonMobile } from "./SearchButtonMobile";
import { SearchFormWeb } from "./SearchFormWeb";

export function Header({ categories }: { categories: Category[] }) {
	return (
		<header className="page-header" role="banner" dir="rtl">
			<div className="header-content">
				<div className="left-section">
					<Banner />
				</div>
				<div className="middle-section">
					<SearchFormWeb categories={categories} />
				</div>
				<div className="right-section">
					<HelpUsButton />
					<SearchButtonMobile categories={categories} />
				</div>
			</div>
		</header>
	);
}

function HelpUsButton() {
	return (
		<a
			className="contribute-button"
			href="https://github.com/4tals/LinksForIsrael/blob/main/docs/contribute.md"
			target="_blank"
			rel="noopener noreferrer"
		>
			מפתחים? עזרו לנו 💪
		</a>
	);
}

function Banner() {
	return (
		<a href="/" id="homepageLink">
			<h1>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					className="banner-icon"
				>
					<g clipPath="url(#clip0_7_707)">
						<path
							d="M26.1734 16L29.9068 9.66667C30.0238 9.46398 30.0854 9.23405 30.0854 9C30.0854 8.76595 30.0238 8.53603 29.9068 8.33334C29.7921 8.12933 29.6258 7.9591 29.4245 7.83974C29.2232 7.72038 28.9941 7.65609 28.7601 7.65334H21.3334L17.1468 0.640002C17.0287 0.441038 16.8609 0.276217 16.6599 0.161738C16.4588 0.0472585 16.2315 -0.0129395 16.0001 -0.0129395C15.7688 -0.0129395 15.5414 0.0472585 15.3403 0.161738C15.1393 0.276217 14.9715 0.441038 14.8534 0.640002L10.7334 7.62667H3.24011C3.00611 7.62942 2.77697 7.69371 2.57569 7.81307C2.37441 7.93243 2.20809 8.10267 2.09344 8.30667C1.97642 8.50936 1.91481 8.73929 1.91481 8.97334C1.91481 9.20738 1.97642 9.43731 2.09344 9.64L5.82677 16L2.09344 22.3467C1.97675 22.5488 1.91515 22.778 1.9148 23.0113C1.91444 23.2447 1.97535 23.4741 2.09142 23.6765C2.2075 23.879 2.37468 24.0474 2.57625 24.165C2.77783 24.2826 3.00674 24.3453 3.24011 24.3467H10.7334L14.8534 31.3467C14.9715 31.5456 15.1393 31.7105 15.3403 31.8249C15.5414 31.9394 15.7688 31.9996 16.0001 31.9996C16.2315 31.9996 16.4588 31.9394 16.6599 31.8249C16.8609 31.7105 17.0287 31.5456 17.1468 31.3467L21.3334 24.32H28.8268C29.0601 24.3186 29.2891 24.256 29.4906 24.1384C29.6922 24.0208 29.8594 23.8523 29.9755 23.6499C30.0915 23.4474 30.1524 23.218 30.1521 22.9847C30.1517 22.7513 30.0901 22.5221 29.9734 22.32L26.1734 16ZM26.4268 10.32L24.6268 13.3333L22.8268 10.2933L26.4268 10.32ZM23.0801 16L19.7334 21.6533H12.2668L8.92011 16L12.2668 10.2933H19.7334L23.0801 16ZM16.0001 4L18.1734 7.68H13.8268L16.0001 4ZM5.57344 10.2933H9.17344L7.37344 13.3333L5.57344 10.2933ZM5.57344 21.6533L7.37344 18.6667L9.17344 21.72L5.57344 21.6533ZM16.0001 28L13.8268 24.3067H18.1734L16.0001 28ZM22.8268 21.64L24.6268 18.6667L26.4268 21.72L22.8268 21.64Z"
							fill="white"
						/>
					</g>
					<defs>
						<clipPath id="clip0_7_707">
							<rect width="32" height="32" fill="white" />
						</clipPath>
					</defs>
				</svg>
				פורטל לינק לישראל
			</h1>
		</a>
	);
}
