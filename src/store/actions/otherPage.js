export const CHANGE_OTHER_PAGE_TEXT = 'CHANGE_MAIN_PAGE_TEXT';
export const RESET_OTHER_PAGE_TEXT = 'RESET_OTHER_PAGE_TEXT';

export function changeOtherPageText(newText) {
    return {
        type: CHANGE_OTHER_PAGE_TEXT,
        newText,
    };
}

export function resetOtherPageText() {
    return {
        type: RESET_OTHER_PAGE_TEXT,
    };
}
