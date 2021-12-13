export const login = (req, res) => res.send("Login");
export const join = (req, res) => res.send("Join");
export const see = (req, res) => {
	return res.send(`User Profile id:${req.params.id}`);
}
export const logout = (req, res) => res.send("Logout");
export const edit = (req, res) => {
	return res.send(`User Edit id:${req.params.id}`);
}
export const remove = (req, res) => {
	return res.send(`User Remove id:${req.params.id}`);
}