// Auto-generated entrypoint for Cloudflare Worker

import { ResumeGeneratorBackendHandler } from './api/ResumeGeneratorBackend';
import { AIResumeGeneratorHandler } from './api/AIResumeGenerator';
import { ATSOptimizationBackendHandler } from './api/ATSOptimizationBackend';
import { TemplateLibraryHandler } from './api/TemplateLibrary';
import { DynamicUpdateServiceHandler } from './api/DynamicUpdateService';

const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ResumeCraft AI</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body class="bg-gray-50 font-sans">
    <header class="bg-blue-500 text-white py-4">
        <div class="container mx-auto flex justify-between items-center">
            <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-eeM7RLe3Wv2HZ7Toub47POas/user-rnGwZEmjnwoUoF8lEvadvt0O/img-cr6fYEPHOTYju81ALUQTddDH.png?st=2025-07-27T21%3A04%3A50Z&se=2025-07-27T23%3A04%3A50Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=cc612491-d948-4d2e-9821-2683df3719f5&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-27T12%3A19%3A26Z&ske=2025-07-28T12%3A19%3A26Z&sks=b&skv=2024-08-04&sig=A8ADYOJ40kamiP1KsW9MLmRcCAqfCc0J17JpnMZ21sg%3D" alt="ResumeCraft AI Logo" class="h-12">
            <h1 class="text-2xl font-bold">ResumeCraft AI</h1>
            <p class="text-sm">Crafting Your Future, One Resume at a Time</p>
        </div>
    </header>

    <main class="container mx-auto mt-8">
        <section class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-xl font-semibold mb-4 text-center">Get Started with AI-Powered Resume Generation</h2>
            <form id="resumeForm" class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium">Full Name</label>
                    <input type="text" id="name" name="name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium">Email Address</label>
                    <input type="email" id="email" name="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
                </div>
                <div>
                    <label for="jobHistory" class="block text-sm font-medium">Job History</label>
                    <textarea id="jobHistory" name="jobHistory" rows="4" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Describe your past job experiences..." required></textarea>
                </div>
                <div>
                    <label for="careerObjectives" class="block text-sm font-medium">Career Objectives</label>
                    <textarea id="careerObjectives" name="careerObjectives" rows="4" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="What are your career goals?" required></textarea>
                </div>
                <button type="submit" class="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition">Generate Resume</button>
            </form>
        </section>

        <section id="resumeOutput" class="mt-8 hidden">
            <h2 class="text-xl font-semibold mb-4 text-center">Your Generated Resume</h2>
            <div class="bg-white p-6 rounded-lg shadow">
                <p class="text-gray-700">Resume content will appear here...</p>
            </div>
        </section>
    </main>

    <footer class="bg-gray-800 text-white py-4 mt-12">
        <div class="container mx-auto text-center">
            <p>&copy; 2023 ResumeCraft AI. All rights reserved.</p>
        </div>
    </footer>

</body>
</html>`;
const STYLE_CSS = `/* Custom styles for ResumeCraft AI */
body {
    font-family: 'Arial', sans-serif;
}

#resumeForm input, #resumeForm textarea {
    outline: none;
}

#resumeForm button:hover {
    cursor: pointer;
}

#resumeOutput {
    display: none;
}`;
const SCRIPT_JS = `document.getElementById('resumeForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        jobHistory: formData.get('jobHistory'),
        careerObjectives: formData.get('careerObjectives')
    };

    try {
        const response = await fetch('/functions/api/handler.ts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById('resumeOutput').querySelector('p').textContent = result.resume;
            document.getElementById('resumeOutput').classList.remove('hidden');
        } else {
            console.error('Failed to generate resume');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path === '/') return new Response(INDEX_HTML, { headers: { 'Content-Type': 'text/html' } });
    if (path === '/style.css') return new Response(STYLE_CSS, { headers: { 'Content-Type': 'text/css' } });
    if (path === '/script.js') return new Response(SCRIPT_JS, { headers: { 'Content-Type': 'application/javascript' } });
    if (path === '/api/ResumeGeneratorBackend') return ResumeGeneratorBackendHandler(request);
    if (path === '/api/AIResumeGenerator') return AIResumeGeneratorHandler(request);
    if (path === '/api/ATSOptimizationBackend') return ATSOptimizationBackendHandler(request);
    if (path === '/api/TemplateLibrary') return TemplateLibraryHandler(request);
    if (path === '/api/DynamicUpdateService') return DynamicUpdateServiceHandler(request);
    return new Response('Not found', { status: 404 });
  }
};
