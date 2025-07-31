import { createContext, useContext, useEffect, useState } from "react";
import { loadFromStorage, saveToStorage } from "../utils/localStorage";

const defaultCVData = {
	personal: {
		fullName: "Tyler Durden",
		email: "soapguru@fightclub.com",
		phone: "+1 (777) 420-1999",
	},
	education: [
		{
			school: "Philosophy of Chaos",
			degree: "Project Mayhem Underground Academy",
			startDate: "1998-09-01",
			endDate: "2001-06-15",
			uuid: self.crypto.randomUUID(),
		},
		{
			school: "Life Experience",
			degree: "Self-Taught Minimalism & Rebellion",
			startDate: "1995-01-01",
			endDate: "1998-01-01",
			uuid: self.crypto.randomUUID(),
		},
	],
	experience: [
		{
			company: "Fight Club",
			position: "Founder & Visionary",
			responsibilities:
				"Established and managed an underground network of bare-knuckle fight clubs. Promoted anti-consumerist philosophy and personal freedom. Built a grassroots movement that challenged modern masculinity and societal norms. Facilitated self-destruction as a form of enlightenment.",
			startDate: "1999-03-15",
			endDate: "2001-10-01",
			uuid: self.crypto.randomUUID(),
		},
		{
			company: "Paper Street Soap Company",
			position: "Co-Founder / Chemist",
			responsibilities:
				"Produced and distributed high-quality soap using unconventional ingredients. Scaled production through a low-profile yet efficient manufacturing process. Served as a front for financing operations of Project Mayhem. Specialized in chemical reactions and misdirection.",
			startDate: "1998-05-01",
			endDate: "2001-09-15",
			uuid: self.crypto.randomUUID(),
		},
	],
};

const CVContext = createContext();

export const CVProvider = ({ children }) => {
	const [cvData, setCvData] = useState(() => {
		return loadFromStorage("cvData", defaultCVData);
	});

	const updateCVSection = (sectionName, updatedData) => {
		setCvData((prevState) => ({
			...prevState,
			[sectionName]: updatedData,
		}));
	};

	const addEntry = (sectionName, entryData) => {
		setCvData((prevCvData) => ({
			...prevCvData,
			[sectionName]: [...prevCvData[sectionName], entryData],
		}));
	};

	const deleteEntry = (sectionName, entryId) => {
		if (!entryId) {
			throw new Error("Entry ID is required");
		}

		const entries = cvData[sectionName];

		if (!entries) {
			throw new Error(`Section ${sectionName} does not exist`);
		}

		const index = entries.findIndex((entry) => entry.uuid === entryId);

		if (index === -1) {
			throw new Error(
				`Entry with ID ${entryId} does not exist in section ${sectionName}`,
			);
		}

		if (window.confirm(`Delete this ${sectionName} entry?`)) {
			setCvData((prev) => ({
				...prev,
				[sectionName]: entries.filter((entry) => entry.uuid !== entryId),
			}));
		}
	};

	useEffect(() => {
		saveToStorage("cvData", cvData);
	}, [cvData]);

	return (
		<CVContext value={{ cvData, updateCVSection, addEntry, deleteEntry }}>
			{children}
		</CVContext>
	);
};

export const useCVContext = () => {
	const context = useContext(CVContext);
	if (!context) {
		throw new Error("useCVContext must be used within a CVProvider component");
	}
	return context;
};
