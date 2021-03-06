const db = firebase.firestore();

items = db.collection('items').orderBy('name').limit(2);
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const { serverTimestamp } = firebase.firestore.FieldValue;
  items.add({
    name: faker.name.findName(),
    createdAt: serverTimestamp(),
  });
});

items.get().then((e) => {
  e.forEach((doc) => {
    console.log(doc.data());
  });
});

let unsubscribe = items.onSnapshot();
