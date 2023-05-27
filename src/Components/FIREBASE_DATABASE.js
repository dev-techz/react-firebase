import { getDatabase, ref, set } from "firebase/database";
import { app } from "./FIREBASE_CONFIG";

const db = getDatabase(app);

function Firebase_Database() {

  const putData = () => {
    set(ref(db, 'user/dev'),
      {
        id: 1,
        name: "dev",
        age: 23
      })
  }

  return (
    <div>
      <h2>Firebase Database</h2>
      <button onClick={putData} >Click Me</button>
    </div>
  );
}

export default Firebase_Database;
