import Layout from "./components/layout";
import Nav from "./components/nav";

const HomePage = () => {
	return (
		<>
			<main>
				<Layout>
					<h1>Welcome to Mattip</h1>
				</Layout>
				<Nav />
			</main>
		</>
	);
};

export default HomePage;
