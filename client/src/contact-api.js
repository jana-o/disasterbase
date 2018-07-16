// client/src/api.js
import axios from "axios";

const service = axios.create({
  baseURL: `http://localhost:3030/api/contacts`
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service: service,

  getContacts() {
    // console.log("ENTERING GETCONTACTS");
    return service
      .get("/")
      .then(res => {
        // console.log("123456789", res);
        return res.data;
      })
      .catch(errHandler);
  },

  getContactDetail(id) {
    console.log("enter2", id);
    return service
      .get("/" + id)
      .then(res => {
        res.data;
        console.log("AFTER", id);
      })
      .catch(errHandler);
  },

  addContact(data) {
    //    console.log("ENTERING ADDCONTACTS");
    return service
      .post("/", data)
      .then(res => {
        res.data;
        console.log("AFTER ADDING TO DB");
      })
      .catch(errHandler);
  },

  deleteContact(id) {
    console.log("ENTERING delete", id);
    return service
      .delete("/" + id)
      .then(res => {
        res.data;
        console.log("delete from DB", id);
      })
      .catch(errHandler);
  },

  modifyContact(id, data) {
    return service
      .post("/" + id, data)
      .then(res => res.data)
      .catch(errHandler);
  }
};
