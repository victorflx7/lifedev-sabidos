import { useState, useEffect, useReducer } from "react"
import { db } from "../firebase/config"
import { doc, updateDoc } from "firebase/firestore"

const initialState = {
    loading: false,
    error: null,
}
const updateReducer = (state, action) => {
    switch (action.type) {
    case "LOADING":
    return { loading: true, error: null }
    case "UPADATED_DOC":
    return { loading: false, error: null }
    case "ERROR":
    return { loading: false, error: action.error }
    default:
    return state
 }
}
export const useUpdateDocument = (docCollection) => {
    const [response, dispatch] = useReducer(updateReducer, initialState)
    const [cancelled, setCancelled] = useState(false)

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action)
        }
    }
    const updateDocument = async (uid, data) => {
        checkCancelBeforeDispatch({type: "LOADING"})
        try {
        const docRef = await updateDocdoc(db, docCollection, uid)
        console.log(docRef)
        const updatedDocument = await updataDoc(docRef, data)
        console.log(updateDocument)
        checkCamcelBeforeDispatch({
            type: "UPADATED_DOC",
            payload: updatedDocument,
        })
    }catch (error) {
        console.log(error)
        checkCancelBeforeDispatch({ type: "ERROR", payload: error.message })        
}
}
useEffect(() => {
    return () => setCancelled(true)
}, [])
return {updateDocument, response}
}