import { validateRequest, optimizeResumeForATS } from '../functions/api/ATSOptimizationHelpers';

export async function ATSOptimizationBackendHandler(req: Request): Promise<Response> {
  try {
    const { valid, message, requestData } = await validateRequest(req);
    if (!valid) {
      return new Response(JSON.stringify({ error: message }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
    const optimizedResume = await optimizeResumeForATS(requestData);
    return new Response(JSON.stringify({ optimizedResume }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}