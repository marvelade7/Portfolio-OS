import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, trim: true },
		slug: { type: String, required: true, unique: true, trim: true },
		category: {
			type: String,
			required: true,
			trim: true,
			default: "Full Stack",
		},
		status: {
			type: String,
			required: true,
			trim: true,
			enum: ["Completed", "In Progress", "Archived"],
			default: "In Progress",
		},
		description: { type: String, required: true },
		impact: { type: String, trim: true },
		techStack: [String],
		repo: { type: String, trim: true },
		demo: { type: String, trim: true },
		thumbnail: { type: String, trim: true },
	},
	{ timestamps: true },
);

export default mongoose.model("Project", projectSchema);