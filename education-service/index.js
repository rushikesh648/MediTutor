// Snippet from education-service/index.js
// ... Assumes QUIZ_KNOWLEDGE_BASE is imported ...

router.get('/quiz/generate/:patientId', (req, res) => {
    const status = getPatientStatus(req.params.patientId);
    
    if (status.status === 'NON_COMPLIANT' && status.trigger_code === 'CARBS_TOO_HIGH') {
        const quiz = QUIZ_KNOWLEDGE_BASE['CARBS_TOO_HIGH'];
        return res.json({
            message: `Personalized learning triggered. Focus: ${quiz.title}`,
            questions: quiz.questions
        });
    }
    res.json({ message: 'Patient is compliant.' });
});
