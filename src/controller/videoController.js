export const recommending = (req, res) => {
	res.render("home");//기본적으로 views에서 찾도록 되어있어서... 따로 import도 필요 없다.
}
export const watch = (req, res) => {
	res.render("watch");
}
export const edit = (req, res) => {
	return res.send(`Edit Video #${req.params.id}`);
}
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) =>{
	return res.send(`Delete Viode #${req.params.id}`);
}
export const search = (req, res) => res.send("Search");