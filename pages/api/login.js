import { getUserByEmail } from "../../server/user_server";

async function Login(req, res) {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    console.log(user);
    console.log(password);
    if (user.password === password) {
        console.log('success');
        res.send({ status: 200, message: JSON.stringify(user) });
    } else {
        console.log('failure');
        res.send({ status: 401, message: "Unauthorized" });
    }
}

export default Login;