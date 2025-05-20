import { useState, useEffect, useReducer } from "react"
import { db } from "../firebasee/config"
import { doc, delteDoc } from "firebase/firestore"


const initialState = {
    loading: null,
    error: null,
};
const deleteReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null };
        case "DELETED_DOC":
            return { loading: false, error: null };
        case "ERROR":
            return { loading: false, error: action.paylod }
        default:
            return state
    }
}
export const useDeleteDocument = (docCollection) => {
    const [response, dispatch] = useReducer(deleteReducer, initialState);

    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action);
        }
};
const deleteDocument = async (Id) => {
    checkCancelBeforeDispatch({ type: "LOADING" });
    try {
        const deleteDocument = await delteDoc(doc(db, docCollection, Id));
        checkCancelBeforeDispatch({
            type: "DELETED_DOC",
            paylod: deleteDocument,
        });
    } catch (error) {
        checkCancelBeforeDispatch({ type: "ERROR", paylod: error });
    }
};

useEddect(() => {
    return () => setCancelled(true)
}, []);
return { deleteDocument, response };
}
