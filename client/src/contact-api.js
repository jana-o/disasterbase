// client/src/api.js
import axios from "axios";

const service = axios.create({
  baseURL: `http://localhost:3030/api/`
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service: service,

  getContacts() {
    console.log("ENTERING GETCONTACTS");
    return service
      .get("contacts")
      .then(res => {
        console.log("123456789", res);
        return res.data;
      })
      .catch(errHandler);
  },

  getContactDetail(id) {
    return service
      .get("contacts/" + id)
      .then(res => res.data)
      .catch(errHandler);
  },

  addContact(data) {
    console.log("ENTERING ADDCONTACTS");
    return service
      .post("contacts", data)
      .then(res => {
        res.data;
        console.log("AFTER ADDING TO DB");
      })
      .catch(errHandler);
  },

  modifyContact(id, data) {
    return service
      .post("contacts/" + id, data)
      .then(res => res.data)
      .catch(errHandler);
  },

  deleteContact(id) {
    return service
      .delete("contacts/" + id)
      .then(res => res.data)
      .catch(errHandler);
  }
};
