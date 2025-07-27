document.getElementById('resumeForm').addEventListener('submit', async function(event) {
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
});