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
    //console.log("enter2", id);
    return service
      .get("/" + id)
      .then(res => {
        // console.log("AFTER", id);
        return res.data;
      })
      .catch(errHandler);
  },

  addContact(data) {
    //    console.log("ENTERING ADDCONTACTS");
    return service
      .post("/", data)
      .then(res => {
        return res.data;
      })
      .catch(errHandler);
  },

  deleteContact(_id) {
    console.log("ENTERING delete");
    return service
      .delete("/", _id)
      .then(res => {
        console.log("delete from DB", _id);
        return res.data;
      })
      .catch(errHandler);
  },

  modifyContact(id, data) {
    return service
      .post("/" + id, data)
      .then(res => {
        console.log("edit in DB", id);
        return res.data;
      })
      .catch(errHandler);
  }
};
