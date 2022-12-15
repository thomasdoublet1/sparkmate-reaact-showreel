export const storedPromptReducer = (state="Spark", action) => {
    switch (action.type)
    {
        case "test": return  {content:action.payload};

        default:
            return {content: state}
    }
}