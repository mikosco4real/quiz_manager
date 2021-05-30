export const CREATE_QUIZ = 'CREATE_QUIZ'
export const createQuiz = quiz => ({
    type: CREATE_QUIZ,
    payload: { quiz },
});

export const UPDATE_QUIZ = 'UPDATE_QUIZ'
export const updateQuiz = quiz => ({
    type: UPDATE_QUIZ,
    payload: { quiz },
});

export const REMOVE_QUIZ = 'REMOVE_QUIZ'
export const removeQuiz = id => ({
    type: REMOVE_QUIZ,
    payload: { id },
});