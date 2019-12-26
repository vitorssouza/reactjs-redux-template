export const CHANGE_MAIN_PAGE_TEXT = 'CHANGE_MAIN_PAGE_TEXT';
export const RESET_MAIN_PAGE_TEXT = 'RESET_MAIN_PAGE_TEXT';

export function changeMainPageText(newText) {
    return {
        type: CHANGE_MAIN_PAGE_TEXT,
        newText,
    };
}

export function resetMainPageText() {
    return {
        type: RESET_MAIN_PAGE_TEXT,
    };
}
