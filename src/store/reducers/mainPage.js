import {
    CHANGE_MAIN_PAGE_TEXT,
    RESET_MAIN_PAGE_TEXT,
} from '../actions/mainPage';

const INITIAL_STATE = {
    MainPageText: 'Main Page',
};

const MainPageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_MAIN_PAGE_TEXT:
            return {
                ...state,
                MainPageText: action.newText,
            };
        case RESET_MAIN_PAGE_TEXT:
            return {
                ...state,
                MainPageText: INITIAL_STATE.MainPageText,
            };
        default:
            return state;
    }
};

export default MainPageReducer;
