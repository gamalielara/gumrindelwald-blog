import Link from "next/link";
import React from "react";
import { MENUS } from "../../utils/vars";
import NavMenu from "./NavMenu";

const SideBar = () => {
	return (
		<aside className="h-screen bg-white absolute left-full z-50 w-screen flex flex-col items-center justify-center">
			<ul className="w-full p-4">
				{MENUS.map((menu) => (
					<NavMenu key={menu.name}>
						<Link href={menu.url}>
							<a>{menu.name}</a>
						</Link>
					</NavMenu>
				))}
			</ul>
		</aside>
	);
};

export default SideBar;
