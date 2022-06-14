const apiUrl = `http://localhost:2700/`;

export class QuizService
{
   
    saveScore = (score) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(score)
        };
    
        return fetch(`${apiUrl}scoreQuiz`, requestOptions)
        .then(response => response.json())
    }
}
