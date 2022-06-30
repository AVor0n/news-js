export const $ = <T extends HTMLElement>(selector: string, scope?: Element) => {
    const element = (scope ?? document).querySelector<T>(selector);
    if (element === null) {
        throw new ReferenceError(`Не удалось найти элемент по селектору '${selector}'`);
    }
    return element;
};

export const $$ = <T extends HTMLElement>(selector: string, scope?: Element) => {
    const listOfElements = (scope ?? document).querySelectorAll<T>(selector);
    return Array.from(listOfElements);
};
