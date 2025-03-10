export default async function indexhandler(req, res) {
  try {
    return res
      .status(201)
      .json({ message: "Account deletion request submitted successfully" });
  } catch (err) {
    console.log(err)
  }
}
