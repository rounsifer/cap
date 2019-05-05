export const updateObject = (oldObject, updatedProperties) => {
    return {
        // replace the old keys in old object with the new keys
        // from updated properties
        ...oldObject,
        ...updatedProperties
    }

}