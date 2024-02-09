import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase.config";

const Storage = {
  uploadFile: (media) => {
    return new Promise(resolve => {
      try {
        const mediaRef = ref(storage, `images/${media.title}`)
        uploadBytes(mediaRef, media.file).then(snapshot => {
          resolve({ path: snapshot.metadata.fullPath, name: media.title })
        })
      } catch (err) {
        console.error(err)
      }
    })
  },
  downloadFile: (media) => {
    return new Promise(resolve => {
      try {
        const mediaRef = ref(storage, media.path)
        const fileURL = getDownloadURL(mediaRef)
        resolve(fileURL)
      } catch (err) {
        console.error(err)
      }
    })
  }
}

export default Storage;