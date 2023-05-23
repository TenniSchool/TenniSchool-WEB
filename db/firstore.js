import { getFireStore } from "firebase/firstore"
import firebaseConfig from "./firebaseConfig"

const fireStore = getFireStore(firebaseConfig);
export default fireStore;