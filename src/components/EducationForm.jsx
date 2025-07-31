import { GraduationCap, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useCVContext } from "../context/CVContext";

const EducationForm = () => {
	const { cvData, updateCVSection, addEntry, deleteEntry } = useCVContext();
	const [announcement, setAnnouncement] = useState("");

	const handleEducationChange = (e) => {
		const { value, name, dataset } = e.target;
		const index = parseInt(dataset.index);

		const updatedEducation = [...cvData.education];
		updatedEducation[index][name] = value;
		updateCVSection("education", updatedEducation);
	};

	const handleAddEntry = () => {
		const newEntry = {
			school: "",
			degree: "",
			startDate: "",
			endDate: "",
			uuid: self.crypto.randomUUID(),
		};
		addEntry("education", newEntry);
		setAnnouncement(`Education #${cvData.education.length + 1} added`);
	};

	const handledeleteEntry = (e, index) => {
		const id = e.currentTarget.id;
		deleteEntry("education", id);
		setAnnouncement(`Entry with ID ${index} deleted successfully`);
	};

	return (
		<div className="section">
			<h2 className="section__title section__title--education">
				<GraduationCap />
				Education
			</h2>

			{cvData.education.map((data, index) => (
				<fieldset
					className="entry"
					key={data.uuid}
					aria-labelledby={`education-${index + 1}`}
					tabIndex={-1}
				>
					<legend id={`education-${index}`} className="u-sr-only">
						Education #{index + 1} entry
					</legend>
					<div className="entry__header">
						<h4 className="entry__title">Education #{index + 1}</h4>
						<button
							type="button"
							className="entry__remove"
							onClick={(e) => handledeleteEntry(e, index)}
							id={data.uuid}
							aria-label={`Remove education #${index + 1}`}
						>
							<Trash2 size={16} />
						</button>
					</div>
					<div className="form__row">
						<div className="form__group">
							<label className="form__label" htmlFor={`school-${index}`}>
								School/University
							</label>
							<input
								id={`school-${index}`}
								name="school"
								type="text"
								data-index={index}
								className="form__input"
								placeholder="University name"
								onChange={handleEducationChange}
								value={data.school}
							/>
						</div>
						<div className="form__group">
							<label className="form__label" htmlFor={`degree-${index}`}>
								Degree/Program
							</label>
							<input
								id={`degree-${index}`}
								name="degree"
								type="text"
								data-index={index}
								className="form__input"
								placeholder="Degree or program"
								onChange={handleEducationChange}
								value={data.degree}
							/>
						</div>
					</div>
					<div className="form__row">
						<div className="form__group">
							<label className="form__label" htmlFor={`startDate-${index}`}>
								Start Date
							</label>
							<input
								id={`startDate-${index}`}
								name="startDate"
								type="date"
								data-index={index}
								className="form__input"
								onChange={handleEducationChange}
								value={data.startDate}
							/>
						</div>
						<div className="form__group">
							<label className="form__label" htmlFor={`endDate-${index}`}>
								End Date
							</label>
							<input
								id={`endDate-${index}`}
								name="endDate"
								type="date"
								data-index={index}
								className="form__input"
								onChange={handleEducationChange}
								value={data.endDate}
							/>
						</div>
					</div>
				</fieldset>
			))}

			<div className="form__actions">
				<button
					type="button"
					className="btn btn--success"
					onClick={handleAddEntry}
				>
					<Plus />
					Add Education
				</button>
			</div>

			<div aria-live="polite" className="u-sr-only">
				{announcement}
			</div>
		</div>
	);
};

export default EducationForm;
