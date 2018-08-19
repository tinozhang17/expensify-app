import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// const firebaseNotes = {
//     notes: {
//         id1: {
//             title: 'first note',
//             body: 'note body'
//         },
//         id2: {
//             title: 'second note',
//             body: 'note body'
//         }
//     }
// };

// database.ref('notes').push({
//     title: 'first note',
//     body: 'note body'
// }).then(() => {
//     console.log('Save success');
// }).catch((e) => {
//     console.log('Error saving', e);
// }); // this will push an object into the 'notes' property, and generate a random unique id as a key for the object. This is how we will work with array-like data.
//
// database.ref('notes').push({
//     title: 'second note',
//     body: 'note body'
// });
//
// database.ref('notes').on('child_removed', (snapshot) => {
//     console.log('child removed: ', snapshot.key, snapshot.val());
// });
//
// database.ref('notes').on('child_changed', (snapshot) => {
//     console.log('child changed: ', snapshot.key, snapshot.val());
// });
//
// database.ref('notes').on('child_added', (snapshot) => {
//     console.log('child_added: ', snapshot.key, snapshot.val());
// }); // child_added event will get called for new children AND existing children.

// database.ref('notes')
//     .once('value')
//     .then((snapshot) => {
//         const notes = [];
//         snapshot.forEach((childSnapshot) => {
//             notes.push({
//                 id: childSnapshot.key,
//                 ...snapshot
//             });
//         });
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref('notes')
//     .on('value', (snapshot) => {
//         const notes = [];
//         snapshot.forEach((childSnapshot) => {
//             notes.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(notes);
//     }, (e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Tino',
//     age: 23,
//     isSingle: true,
//     location: {
//         city: 'Toronto',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });
//
// database.ref().update({
//     age: 24,
//     name: 'Tino Tomotomo',
//     job: "Data Analyst", // adding job
//     isSingle: null, // delete isSingle
//     'location/city': 'Montreal' // update the city
// });
//
// // using .once(), you fetch the data once.
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error feetching data.', e);
//     });
//
// // using .on(), the callback function is re-run every time (in this case we are fetching the data) there is a change to the data
// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val());
//     }, (e) => {
//         console.log('Error with data fetching', e);
//     });

// database.ref().off(onValueChange); // this removes the onValueChange subscription to the changes in the reference. If you don't pass in any argument to .off(), then all subscriptions are removed.


// database.ref('age').set(24); // only changes the 'age' property. If you pass no argument to ref(), then all current data will be overridden
//
// database.ref('location/city').set('Montreal');
//
// database.ref('attributes').set({
//     height: 6,
//     weight: 130
// });
//
// database.ref('attributes').remove().then(() => {
//     console.log('Data is removed.');
// }).catch((e) => {
//     console.log('Did not remove data.', e);
// }); // first way of removing
//
// database.ref('isSingle').set(null); // second way of removing. But using .remove() is preferred.