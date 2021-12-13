export const recommending = (req, res) => res.send("Home");
export const watch = (req, res) => {
	return res.send(`Watch Video #${req.params.id}`);
}
export const edit = (req, res) => {
	return res.send(`Edit Video #${req.params.id}`);
}
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) =>{
	return res.send(`Delete Viode #${req.params.id}`);
}
export const search = (req, res) => res.send("Search");