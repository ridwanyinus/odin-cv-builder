import { User } from "lucide-react";
import { useState } from "react";
import { useCVContext } from "../context/CVContext";

const GeneralInfoForm = () => {
	const { cvData, updateCVSection } = useCVContext();
	const [errors, setError] = useState({});
	const [formData, setFormData] = useState(cvData.personal);

	const handleInputChange = (e) => {
		const { value, name } = e.target;

		setFormData((prev) => ({ ...prev, [name]: value }));

		const newErrors = validateInput(name, value);
		setError(newErrors);

		if (!newErrors[name]) {
			updateCVSection("personal", { ...cvData.personal, [name]: value });
		}
	};

	const validateInput = (name, value) => {
		const newErrors = { ...errors };
		const trimmedValue = value.trim();

		switch (name) {
			case "fullName":
				if (!trimmedValue) {
					newErrors.fullName = "Please enter a value for the full name field";
				} else if (trimmedValue.length < 2) {
					newErrors.fullName = "Full Name must be at least 2 characters";
				} else if (trimmedValue.length > 100) {
					newErrors.fullName = "Full Name is too long (maximum 100 characters)";
				} else if (
					!/^[a-zA-ZÀ-ÿĀ-žА-я\u4e00-\u9fff\u0100-\u017f\u0180-\u024f\s\-'.]+$/.test(
						trimmedValue,
					)
				) {
					newErrors.fullName =
						"Name can only contain letters, spaces, hyphens, and apostrophes";
				} else {
					delete newErrors.fullName;
				}
				break;

			case "phone":
				if (trimmedValue) {
					// Check for invalid characters first
					const hasInvalidChars = /[^+\d\s\-().]/g.test(value);
					const digitsOnly = value.replace(/\D/g, "");

					if (hasInvalidChars) {
						newErrors.phone = "Phone number contains invalid characters";
					} else if (digitsOnly.length < 7) {
						newErrors.phone = "Phone number is too short (minimum 7 digits)";
					} else if (digitsOnly.length > 15) {
						newErrors.phone = "Phone number is too long (maximum 15 digits)";
					} else {
						delete newErrors.phone;
					}
				} else {
					delete newErrors.phone;
				}
				break;

			case "email":
				if (value && !/^\S+@\S+\.\S+$/.test(value)) {
					newErrors.email = "Please enter a valid email address";
				} else {
					delete newErrors.email;
				}
				break;

			default:
				break;
		}

		return newErrors;
	};

	return (
		<div className="section">
			<h2 className="section__title section__title--personal">
				<User aria-hidden="true" />
				Personal Information
			</h2>
			<div className="form__group">
				<label className="form__label" htmlFor="fullName">
					Full Name
				</label>
				<input
					id="fullName"
					name="fullName"
					type="text"
					value={formData.fullName}
					className="form__input"
					placeholder="Enter your full name"
					onChange={(e) => {
						handleInputChange(e);
						validateInput(e.target.name, e.target.value);
					}}
					aria-invalid={errors.fullName ? "true" : "false"}
					aria-describedby={
						errors.fullName ? "fullName-error" : "fullName-desc"
					}
				/>
				{errors.fullName && (
					<div id="fullName-error" className="form__error" role="alert">
						{errors.fullName}
					</div>
				)}
				<div id="fullName-desc" className="u-sr-only">
					Enter your complete legal name as you want it to appear on your CV
				</div>
			</div>
			<div className="form__group">
				<label className="form__label" htmlFor="email">
					Email Address
				</label>
				<input
					id="email"
					name="email"
					type="email"
					value={formData.email}
					className={`form__input ${errors.email ? "form__input--error" : ""}`}
					placeholder="your.email@example.com"
					onChange={(e) => {
						handleInputChange(e);
						validateInput(e.target.name, e.target.value);
					}}
					aria-invalid={errors.email ? "true" : "false"}
					aria-describedby={errors.email ? "email-error" : "email-desc"}
				/>
				<div id="email-desc" className="u-sr-only">
					Enter your email address as you want it to appear on your CV
				</div>
				{errors.email && (
					<div id="email-error" className="form__error" role="alert">
						{errors.email}
					</div>
				)}
			</div>
			<div className="form__group">
				<label className="form__label" htmlFor="phone">
					Phone Number
				</label>
				<input
					id="phone"
					name="phone"
					type="tel"
					value={formData.phone}
					className={`form__input ${errors.phone ? "form__input--error" : ""}`}
					placeholder="+1 (555) 123-4567"
					onChange={(e) => {
						handleInputChange(e);
						validateInput(e.target.name, e.target.value);
					}}
					aria-invalid={errors.phone ? "true" : "false"}
					aria-describedby={errors.phone ? "phone-error" : "phone-desc"}
				/>
				<div id="phone-desc" className="u-sr-only">
					Enter your phone number as you want it to appear on your CV
				</div>
				{errors.phone && (
					<div id="phone-error" className="form__error" role="alert">
						{errors.phone}
					</div>
				)}
			</div>
		</div>
	);
};

export default GeneralInfoForm;
