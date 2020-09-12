import { useState, useEffect } from "react";
import { firebaseDatabase } from "../../firebase";

export default (shouldWatch, nodePath, keyFilter = null) => {
  const [items, setItems] = useState([]);
  const [listener, setListener] = useState(null);
  let query = firebaseDatabase.ref(nodePath);
  if (keyFilter) {
    query = query.orderByChild("parent").equalTo(keyFilter);
  }

  useEffect(() => {
    if (shouldWatch) {
      console.log("ONNN", query);
      setListener(
        query.on("value", dataSnapshot => {
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
        })
      );
    } else {
      console.log("OFFFF");
      query.off("value", listener);
      setListener(null);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldWatch]);

  return [items];
};
