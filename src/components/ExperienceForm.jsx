import { Briefcase, Plus, Trash2 } from "lucide-react";
import { useCVContext } from "../context/CVContext";

const ExperienceForm = () => {
	const { cvData, updateCVSection, addEntry, deleteEntry } = useCVContext();

	const handleExperienceChange = (e) => {
		const { value, name, dataset } = e.target;
		const index = parseInt(dataset.index);

		const updatedEducation = [...cvData.experience];
		updatedEducation[index][name] = value;
		updateCVSection("experience", updatedEducation);
	};

	const handleaddEntry = () => {
		const newEntry = {
			company: "",
			position: "",
			responsibilities: "",
			startDate: "",
			endDate: "",
			uuid: self.crypto.randomUUID(),
		};
		addEntry("experience", newEntry);
	};

	const handledeleteEntry = (e) => {
		const id = e.currentTarget.id;
		deleteEntry("experience", id);
	};

	return (
		<div className="section">
			<h2 className="section__title section__title--experience">
				<Briefcase />
				Professional Experience
			</h2>

			{cvData.experience.map((data, index) => (
				<div className="entry" key={data.uuid}>
					<div className="entry__header">
						<h4 className="entry__title">Experience #{index + 1}</h4>
						<button
							type="button"
							id={data.uuid}
							className="entry__remove"
							onClick={handledeleteEntry}
						>
							<Trash2 size={16} />
						</button>
					</div>
					<div className="form__row">
						<div className="form__group">
							<label className="form__label" htmlFor={`company-${index}`}>
								Company Name
							</label>
							<input
								id={`$company-${index}`}
								name="company"
								type="text"
								data-index={index}
								className="form__input"
								placeholder="Company name"
								onChange={handleExperienceChange}
								value={data.company}
							/>
						</div>
						<div className="form__group">
							<label className="form__label" htmlFor={`position-${index}`}>
								Position Title
							</label>
							<input
								id={`position-${index}`}
								name="position"
								type="text"
								data-index={index}
								className="form__input"
								placeholder="Job title"
								onChange={handleExperienceChange}
								value={data.position}
							/>
						</div>
					</div>
					<div className="form__group">
						<label
							className="form__label"
							htmlFor={`responsibilities-${index}`}
						>
							Key Responsibilities & Achievements
						</label>
						<textarea
							className="form__textarea"
							id={`responsibilities-${index}`}
							name="responsibilities"
							placeholder="Describe your main responsibilities and achievements..."
							onChange={handleExperienceChange}
							value={data.responsibilities}
							data-index={index}
						/>
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
								onChange={handleExperienceChange}
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
								onChange={handleExperienceChange}
								value={data.endDate}
							/>
						</div>
					</div>
				</div>
			))}

			<div className="form__actions">
				<button
					type="button"
					className="btn btn--success"
					onClick={handleaddEntry}
				>
					<Plus />
					Add Experience
				</button>
			</div>
		</div>
	);
};

export default ExperienceForm;
