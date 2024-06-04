import React from "react";

type Props = {
	searchField: string;
	setSearchField: (symbol: string) => void;
	onSearch: () => void;
	onFocus: () => void;
};

const Header = ({ searchField, setSearchField, onSearch, onFocus }: Props) => {
	return (
		<header
			className="
  		flex flex-col items-center justify-center h-24 bg-gray-900 text-white text-2xl font-bold"
		>
			<h1>Stock Market Overview</h1>
			<div></div>
		</header>
	);
};

export default Header;
