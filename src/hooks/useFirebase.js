import { useState, useEffect } from "react";
import { firebaseDatabase } from "../../firebase";

export default (shouldWatch, nodePath, keyFilter = null) => {
  const [items, setItems] = useState([]);
  const [listener, setListener] = useState(null);
  let query = firebaseDatabase.ref(nodePath);
  if (keyFilter) {
    query = query.orderByChild("parent").equalTo(keyFilter);
  }

  const callback = dataSnapshot => {
    let items = [];
    if (!dataSnapshot) {
      return;
    }
    dataSnapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      items.push(item);
    });
    setItems(items);
  };

  const save = objToSubmit => {
    let ref;
    let id;
    if (objToSubmit.key) {
      ref = firebaseDatabase.ref(nodePath).child(objToSubmit.key);
      id = objToSubmit.key;
    } else {
      ref = firebaseDatabase.ref(nodePath).push();
      id = firebaseDatabase.ref(nodePath).push().key;
    }
    ref.set(objToSubmit);
    return id;
  };

  useEffect(() => {
    if (shouldWatch) {
      console.log("Listener ON");
      let event = query.on("value", callback);
      setListener(event);
    } else {
      console.log("Listener OFF");
      query.off("value", listener);
      setListener(null);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldWatch]);

  return [items, save];
};
