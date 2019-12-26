import {
    CHANGE_OTHER_PAGE_TEXT,
    RESET_OTHER_PAGE_TEXT,
} from '../actions/otherPage';

const INITIAL_STATE = {
    OtherPageText: 'Other Page',
};

const OtherPageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_OTHER_PAGE_TEXT:
            return {
                ...state,
                OtherPageText: action.newText,
            };
        case RESET_OTHER_PAGE_TEXT:
            return {
                ...state,
                OtherPageText: INITIAL_STATE.OtherPageText,
            };
        default:
            return state;
    }
};

export default OtherPageReducer;
