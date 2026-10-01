const { applicationDefault, initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const projectId =
    process.env.FIREBASE_PROJECT_ID ||
    process.env.GOOGLE_CLOUD_PROJECT ||
    process.env.GCLOUD_PROJECT ||
    "project-a812a92f-0121-4e33-b95";

const firebaseApp = initializeApp({
    credential: applicationDefault(),
    projectId
});

const firestore = getFirestore(firebaseApp);

module.exports = {
    firebaseApp,
    firestore
};
