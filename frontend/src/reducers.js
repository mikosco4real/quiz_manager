import { CREATE_QUIZ, UPDATE_QUIZ, REMOVE_QUIZ } from './actions'

export const quiz = (state = [], action) => {
    const {type, payload} = action

    switch(type){
        case(CREATE_QUIZ): {
            const maxId = state.length > 0 ? Math.max(...state.map((q) => q.id)) : 0
            const today = new Date().toLocaleDateString()
            const { quiz } = payload
            const newQuiz = {
                id: maxId + 1,
                ...quiz,
                date: today,
            };
            return state.concat(newQuiz);
        }
        case(UPDATE_QUIZ): {
            const { quiz } = payload
            const updatedQuiz = {...quiz, no_questions: quiz.questions.length}
            return state.filter((q) => q.id !== quiz.id ).concat(updatedQuiz)
        }
        case(REMOVE_QUIZ): {
            const { id } = payload
            return state.filter((q) => q.id !== id)
        }
        default:
            return state
    }
}