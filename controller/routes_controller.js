import db from "../models/app-dbtructure.js";

export const home = async (req, res) => {
  const { page = 1, limit = 4 } = req.query;
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };
  const contact = await db.paginate({}, options);

  res.render("home", {
    contacts: contact.docs,
    totaldocs: contact.totalDocs,
    limit: contact.limit,
    totalPages: contact.totalPages,
    page: contact.pages,
    pagingCounter : contact.pagingCounter,
    hasPrevPage: contact.hasPrevPage,
    hasNextPage: contact.hasNextPage,
    prevPage: contact.prevPage,
    nextPage: contact.nextPage,
  });
}

export const addcontact=(req, res) => {
  res.render("add");
}

export const view = async (req, res) => {
  const contact = await db.findById(req.params.id);
  res.render("view", { contact });
}

export const post_in_db = async (req, res) => {
  await db.insertOne({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });
  res.redirect("/");
}

export const edit = async (req, res) => {
  const contact = await db.findById(req.params.id);
  res.render("edit", { contact });
}

export const post_id = async (req, res) => {
  await db.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      },
    },
  );
  res.redirect("/");
}

export const deletebyid =  async (req, res) => {
  await db.deleteOne({ _id: req.params.id });
  res.redirect("/");
} 