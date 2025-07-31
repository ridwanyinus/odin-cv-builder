import html2pdf from "html2pdf.js";
import { Download } from "lucide-react";
import { useRef } from "react";
import { useCVContext } from "../context/CVContext";

const CVPreview = () => {
	const { cvData } = useCVContext();
	const previewRef = useRef();
	const formatdate = (date) => {
		if (date) {
			const newDate = new Date(date);
			const formatted = newDate.toLocaleDateString("en-us", {
				year: "numeric",
				month: "long",
			});
			return formatted;
		}
	};

	const handleDownload = () => {
		const element = previewRef.current;
		html2pdf()
			.set({
				margin: 0,
				filename: "my-resume.pdf",
				image: { type: "jpeg", quality: 0.98 },
				html2canvas: { scale: 2 },
				jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
			})
			.from(element)
			.save();
	};

	return (
		<div className="cv-builder__preview">
			<div className="preview" ref={previewRef}>
				<section>
					<div className="preview__header">
						<h1 className="preview__name">{cvData.personal.fullName}</h1>
						<div className="preview__contact">
							{cvData.personal.email && (
								<div className="preview__contact-item">
									📧 {cvData.personal.email}
								</div>
							)}

							{cvData.personal.phone && (
								<div className="preview__contact-item">
									📱 {cvData.personal.phone}
								</div>
							)}
						</div>
					</div>
				</section>
				<div className="preview__section">
					<h2 className="preview__section-title">Education</h2>
					{cvData.education.map((data) => (
						<div className="preview__entry" key={data.uuid}>
							<div className="preview__entry-title">{data.school}</div>
							<div className="preview__entry-subtitle">{data.degree}</div>
							<div className="preview__entry-date">
								{data.startDate &&
									`${formatdate(data.startDate)} - ${formatdate(data.endDate)}`}
							</div>
						</div>
					))}
				</div>

				<div className="preview__section">
					<h2 className="preview__section-title">Professional Experience</h2>
					{cvData.experience.map((data) => (
						<div className="preview__entry" key={data.uuid}>
							<div className="preview__entry-title">{data.position}</div>
							<div className="preview__entry-subtitle">{data.company}</div>
							<div className="preview__entry-date">
								{data.startDate &&
									`${formatdate(data.startDate)} - ${formatdate(data.endDate)}`}
							</div>
							<div className="preview__entry-description">
								{data.responsibilities}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="preview__actions">
				<button
					type="button"
					className="btn btn--primary"
					onClick={handleDownload}
				>
					<Download />
					Download as PDF
				</button>
			</div>
		</div>
	);
};

export default CVPreview;
