import { validateRequest, generateResume } from '../functions/api/helpers';

type ResumeRequest = {
  personalDetails: string;
  jobHistory: string;
  careerObjectives: string;
};

type ResumeResponse = {
  success: boolean;
  resume?: string;
  message?: string;
};

export async function ResumeGeneratorBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ message: 'Method Not Allowed' }), { status: 405 });
    }

    const requestBody: ResumeRequest = await req.json();
    const validationError = validateRequest(requestBody);
    if (validationError) {
      return new Response(JSON.stringify({ success: false, message: validationError }), { status: 400 });
    }

    const resume = await generateResume(requestBody);
    return new Response(JSON.stringify({ success: true, resume }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), { status: 500 });
  }
}
