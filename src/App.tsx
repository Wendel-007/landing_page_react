import Banner from "./components/landingpageComponents/Banner";
import Container from "./components/landingpageComponents/Container";
import CTA from "./components/landingpageComponents/CTA";
import Footer from "./components/landingpageComponents/Footer";
import Header from "./components/landingpageComponents/Header";
import MembersClubBanner from "./components/landingpageComponents/MembersClubBanner";
import Plans from "./components/landingpageComponents/Plans";
import AtomicBanner from "./components/landingpageComponents/AtomicBanner";
import CommonQuestions from "./components/landingpageComponents/CommonQuestions";
import TopButton from "./components/landingpageComponents/TopButton";

const App: React.FC = () => {
	return (
		<Container>
			<Header />
			<Banner />
			<AtomicBanner />
			<CTA />
			<MembersClubBanner />
			<Plans />
			<CommonQuestions />
			<Footer />
			<TopButton />
		</Container>
	);
};

export default App;
