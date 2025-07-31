import CVPreview from "./components/CVPreview";
import EductaionForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import GeneralInfoForm from "./components/GeneralInfoForm";
import { CVProvider } from "./context/CVContext";

const App = () => {
	return (
		<CVProvider>
			<main className="cv-builder">
				<h1 className="u-sr-only">CV Builder Application</h1>
				<section
					className="cv-builder__editor"
					aria-label="CV editing interface"
				>
					<GeneralInfoForm />
					<EductaionForm />
					<ExperienceForm />
				</section>

				<section
					className="cv-builder__preview"
					aria-label="Live CV preview"
					aria-live="polite"
				>
					<CVPreview />
				</section>
			</main>
		</CVProvider>
	);
};

export default App;
