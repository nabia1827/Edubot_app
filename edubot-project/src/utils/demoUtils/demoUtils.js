export const transformData = (data, autor) => {
    return data.map(item => {
        const { text, buttons } = item;
        if (buttons !== null && buttons !== undefined && buttons.length !== 0) {
            return { message: text, autor: autor, botones: buttons };
        } else {
            return { message: text, autor: autor, botones: null };
        }

    });
};

