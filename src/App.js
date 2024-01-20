import React from "react";
import { BrowserRouter as GrandParent, Routes as Parent, Route as Child } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


export default function App() {
	return (
		<GrandParent>
			<Parent>
				<Child path="/" element={<Home />}></Child>
                <Child path="/layout" element={<Layout />}></Child>
                <Child path="/blogs" element={<Blogs />}></Child>
                <Child path="/contact" element={<Contact />}></Child>
                <Child path="*" element={<NoPage />}></Child>
			</Parent>
		</GrandParent>
	);
}
