export const getLocaleText = ctx => text => {
    return ctx && ctx.context && ctx.context.locale &&
        ctx.context.locale[text] != null ? ctx.context.locale[text] : text
}