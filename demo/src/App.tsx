import {Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import React, {useState} from "react";
import Sandbox from "./Sandbox";
import {
	chaining,
	compliments,
	definingConstants, inlineRecursion,
	paths,
	rotationAndAnalogous,
	sandBox,
	scale,
	variables
} from "./Sections/Sections";
import Intro from "./Intro";
import UserTest from "./UserTest";


const App: React.FC = () => {
	const [activeTab, setActiveTab] = useState(0);

	function toggle(tab: number): () => void {
		return () => {
			if (activeTab !== tab) {
				setActiveTab(tab);
			}
		}
	}

	return (
		<Container className="py-5">
			<Intro/>

			<Nav tabs className="mt-3">
				<NavItem>
					<NavLink
						className={activeTab === 0 ? "active" : ""}
						onClick={toggle(0)}
						style={{cursor: "pointer"}}
					>
						Examples
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={activeTab === 1 ? "active" : ""}
						onClick={toggle(1)}
						style={{cursor: "pointer"}}
					>
						User Test
					</NavLink>
				</NavItem>
			</Nav>

			<TabContent activeTab={activeTab}>
				<TabPane tabId={0}>
					<Sandbox {...definingConstants}/>
					<Sandbox {...variables}/>
					<Sandbox {...paths}/>
					<Sandbox {...rotationAndAnalogous}/>
					<Sandbox {...compliments}/>
					<Sandbox {...scale}/>
					<Sandbox {...chaining}/>
					<Sandbox {...inlineRecursion}/>
					<Sandbox {...sandBox}/>
				</TabPane>

				<TabPane tabId={1}>
					<UserTest/>
				</TabPane>
			</TabContent>
		</Container>
)
};

export default App;
