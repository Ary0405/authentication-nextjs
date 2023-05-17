import { createUser } from "../../server/user_server";

async function Register(req, res) {
    const { name, email, password } = req.body;
    const user = await createUser({ name: name, email: email, password: password });
    res.send({ status: 200, message: JSON.stringify(user) });
}

export default Register;