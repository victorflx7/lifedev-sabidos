
import { useState, useEffect} from "react"
import {db} from "../firebase/config"
import {doc, getDoc} from "firebase/firestore"

export const useFetchDocument = (docCollection, Id) =>{
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {
        const loadDocument = async () =>{
        setIsPending(true)
        try {
            const docRef = await doc(db, docCollection, Id)
            const docSnap = await getDoc(docRef)

            setDocument(docSnap.data())
}
catch (error) {
    console.log(error)
    setError(error.message)
 }
 setLoading(false)
}
loadDocument()
},[docCollection, Id])
console.log(document)

return{
    document,
    loading,
    error
}
}