export const createError = (st, m) => {
    const err = new Error();
    err.status = st;
    err.message = m;
    return err;
};