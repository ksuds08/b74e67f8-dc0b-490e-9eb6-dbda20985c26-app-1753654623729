type ResumeRequest = {
  personalDetails: string;
  jobHistory: string;
  careerObjectives: string;
};

export function validateRequest(request: ResumeRequest): string | null {
  if (!request.personalDetails || !request.jobHistory || !request.careerObjectives) {
    return 'All fields are required.';
  }
  return null;
}

export async function generateResume(request: ResumeRequest): Promise<string> {
  // Simulate AI resume generation logic
  const { personalDetails, jobHistory, careerObjectives } = request;
  return `Resume for ${personalDetails} with career objectives: ${careerObjectives}. Previous job history: ${jobHistory}.`;
}
